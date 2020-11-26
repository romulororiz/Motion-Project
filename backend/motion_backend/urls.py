
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views


authurls = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
]


urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/social/posts/', include('posts.urls')),
    path('backend/api/auth/', include(authurls)),
    path('backend/api/social/users/', include('users.urls')),
    path('backend/api/social/friends/', include('friends.urls'))
]
