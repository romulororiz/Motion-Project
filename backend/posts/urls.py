from django.urls import path
from .views import ListCreatePostsAPIView, RetrieveUpdateDestroyPostAPIView, ToggleLikeView, ShowLikedPosts

urlpatterns = [
    path('', ListCreatePostsAPIView.as_view()),
    path('<int:id>/', RetrieveUpdateDestroyPostAPIView.as_view()),
    path('toggle-like/<int:id>/', ToggleLikeView.as_view()),
    path('likes/', ShowLikedPosts.as_view())
]
