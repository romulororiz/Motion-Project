from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.generics import ListCreateAPIView, GenericAPIView, RetrieveAPIView, RetrieveUpdateAPIView
# from posts.permissions import IsAuthorOrReadOnly

User = get_user_model()


class RetrieveUserAPIView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []
    lookup_field = 'id'


class ListCreateUsersAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.save(password=make_password(self.request.data['password']))


class FollowUserView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        obj = self.get_object()
        user = request.user
        if user in obj.followers.all():
            obj.followers.remove(user)
        else:
            obj.followers.add(user)
        serializer = self.get_serializer(obj, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        obj.save()
        return Response(serializer.data)


class RetrieveUpdateLoggedInUserInfoAPIView(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = []

    def get_object(self):
        return self.request.user


# class Retrieve
