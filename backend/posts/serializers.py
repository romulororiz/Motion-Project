from posts.models import Post
from rest_framework import serializers
from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):

    likes_counter = serializers.SerializerMethodField()    

    def get_likes_counter(self, post):
        return post.liked_by.all().count()

    author = UserSerializer(read_only=True)

    class Meta:
        model = Post
        exclude = ['title']
        read_only_fields = ['liked_by', 'author']


# class PostLessInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = ['id', 'title', 'author']
#         read_only_fields = ['author']
