import json
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model
from posts.permissions import IsAuthorOrReadOnly
from rest_framework.generics import ListCreateAPIView, GenericAPIView

User = get_user_model()


class ListCreateUsersAPIView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthorOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(password=make_password(self.request.data['password']))

    # def post(self, request, *args, **kwargs):
    #     new_user = json.loads(request.body)
    #     user = User(**new_user)
    #     user.set_password(request.data['password'])
    #     user.save()
    #     serializer = self.get_serializer(user)
    #     return Response(serializer.data, status=status.HTTP_201_CREATED)


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




