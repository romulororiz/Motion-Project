from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response

from friends.serializers import FriendsSerializer
from .models import Friend

User = get_user_model()


class ListFriendsAPIView(ListAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendsSerializer


class SendFriendRequestView(GenericAPIView):
    queryset = User.objects.all()
    serializer_class = FriendsSerializer
    lookup_url_kwarg = 'user_id'

    def post(self, request, *args, **kwargs):
        user = request.user
        receiver = self.get_object()
        friend_request = Friend(sender=user, receiver=receiver)
        serializer = self.get_serializer(friend_request)
        friend_request.save()
        return Response(serializer.data)


class GetPatchDeleteFriendRequestView(RetrieveUpdateDestroyAPIView):
    queryset = Friend.objects.all()
    serializer_class = FriendsSerializer
    lookup_url_kwarg = 'friends_request_id'


