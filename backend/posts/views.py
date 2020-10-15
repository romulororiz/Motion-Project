from posts.models import Post
from rest_framework.response import Response
from posts.serializers import PostSerializer
from posts.permissions import IsAuthorOrReadOnly
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView


class ListCreatePostsAPIView(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        serializer = (self.get_serializer(data=request.data))
        serializer.is_valid(raise_exception=True)
        serializer.save(author=request.user)
        return Response(serializer.data)


class RetrieveUpdateDestroyPostAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
    lookup_field = 'id'


class ToggleLikeView(GenericAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticated]
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
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return self.request.user.liked_posts.all()

    # def get(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     queryset_filtered = queryset.filter(liked_by=request.user)
    #     serializer = self.get_serializer(queryset_filtered, many=True)
    #     return Response(serializer.data)
