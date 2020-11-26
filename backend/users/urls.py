from django.urls import path
from .views import ListCreateUsersAPIView, FollowUserView, RetrieveUserAPIView, RetrieveUpdateLoggedInUserInfoAPIView

urlpatterns = [
    path('', ListCreateUsersAPIView.as_view()),
    path('toggle-follow/<int:id>/', FollowUserView.as_view()),
    path('<int:id>/', RetrieveUserAPIView.as_view()),
    path('me/', RetrieveUpdateLoggedInUserInfoAPIView.as_view())
]
