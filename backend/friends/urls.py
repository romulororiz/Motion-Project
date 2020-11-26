from django.urls import path
from .views import ListFriendsAPIView, SendFriendRequestView, GetPatchDeleteFriendRequestView

urlpatterns = [
    path('', ListFriendsAPIView.as_view()),
    path('request/<int:user_id>/', SendFriendRequestView.as_view()),
    path('requests/<int:friends_request_id>/', GetPatchDeleteFriendRequestView.as_view()),
]
