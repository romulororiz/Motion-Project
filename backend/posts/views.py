from django.db.models import query
from .models import Post
from rest_framework.response import Response
from .serializers import PostSerializer
from .permissions import IsAuthorOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework import filters


class ListCreatePostsAPIView(ListCreateAPIView):
    search_fields = ['text_content']
    filter_backends = (filters.SearchFilter,)
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []

    def post(self, request, *args, **kwargs):
        serializer = (self.get_serializer(data=request.data))
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        return Response(serializer.data)


class RetrieveUpdateDestroyPostAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []
    lookup_field = 'id'


class ToggleLikeView(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []
    lookup_field = 'id'

    def patch(self, request, *args, **kwargs):
        obj = self.get_object()
        user = request.user
        if user in obj.liked_by.all():
            obj.liked_by.remove(user)
        else:
            obj.liked_by.add(user)
        serializer = self.get_serializer(obj, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class ShowLikedPosts(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []

    def get_queryset(self):
        return self.request.user.liked_posts.all()

    # def get(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     queryset_filtered = queryset.filter(liked_by=request.user)
    #     serializer = self.get_serializer(queryset_filtered, many=True)
    #     return Response(serializer.data)


class ShowPostOfGivenUser(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []
    lookup_field = 'id'

    class Meta:
        ordering = ['id']

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(author=kwargs['id'])
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)


class ShowOwnPosts(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = []

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset().filter(author=request.user)
        serializer = PostSerializer(queryset, many=True)
        return Response(serializer.data)
