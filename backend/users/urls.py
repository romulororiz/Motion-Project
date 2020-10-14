from django.urls import path
from .views import ListCreateUsersAPIView, FollowUserView

urlpatterns = [
    path('', ListCreateUsersAPIView.as_view()),
    path('toggle-follow/<int:id>/', FollowUserView.as_view())
]
