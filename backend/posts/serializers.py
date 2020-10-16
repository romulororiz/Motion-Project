from posts.models import Post
from rest_framework import serializers
from users.serializers import LessInfoUserSerializer


class PostSerializer(serializers.ModelSerializer):

    likes_counter = serializers.SerializerMethodField()

    def get_likes_counter(self, post):
        return post.liked_by.all().count()

    class Meta:

        author = LessInfoUserSerializer()

        model = Post
        fields = '__all__'
        read_only_fields = ['liked_by', 'author', 'like_count']


# class PostLessInfoSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Post
#         fields = ['id', 'title', 'author']
#         read_only_fields = ['author']
