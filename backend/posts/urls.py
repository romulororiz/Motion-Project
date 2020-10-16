from django.urls import path
from .views import ListCreatePostsAPIView, RetrieveUpdateDestroyPostAPIView, ToggleLikeView, ShowLikedPosts, ShowPostOfGivenUser

urlpatterns = [
    path('', ListCreatePostsAPIView.as_view()),
    path('<int:id>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    path('toggle-like/<int:id>/', ToggleLikeView.as_view()),
    path('likes/', ShowLikedPosts.as_view()),
    path('users/<int:id>/', ShowPostOfGivenUser.as_view())  # Change it to retrieve posts of logged in user (request.user)
]
