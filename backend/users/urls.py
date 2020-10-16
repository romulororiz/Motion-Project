from django.urls import path
from .views import ListCreateUsersAPIView, FollowUserView, RetrieveUserAPIView, RetrieveLoggedInUserInfoAPIView

urlpatterns = [
    path('', ListCreateUsersAPIView.as_view()),
    path('toggle-follow/<int:id>/', FollowUserView.as_view()),
    path('<int:id>/', RetrieveUserAPIView.as_view()),
    path('me/', RetrieveLoggedInUserInfoAPIView.as_view())
]
