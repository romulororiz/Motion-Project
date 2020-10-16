from rest_framework import serializers
from django.contrib.auth import get_user_model
from posts.models import Post

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    # posts_counter = serializers.SerializerMethodField()

    # def get_posts_counter(self, post):
    #     return Post.objects.filter(author=User).count()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'followers']


class LessInfoUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']
