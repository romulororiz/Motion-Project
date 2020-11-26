from django.urls import path
from .views import ListCreatePostsAPIView, RetrieveUpdateDestroyPostAPIView, ToggleLikeView, ShowLikedPosts, ShowPostOfGivenUser, ShowOwnPosts

urlpatterns = [
    path('', ListCreatePostsAPIView.as_view()),
    path('<int:id>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    path('toggle-like/<int:id>/', ToggleLikeView.as_view()),
    path('likes/', ShowLikedPosts.as_view()),
    path('user/<int:id>/', ShowPostOfGivenUser.as_view()),
    path('?search=<str:search_string>', ListCreatePostsAPIView.as_view()),
    path('me/', ShowOwnPosts.as_view())
]
