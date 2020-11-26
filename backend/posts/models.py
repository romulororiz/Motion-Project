from django.conf import settings
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=200, blank=True)
    text_content = models.TextField(max_length=400)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=settings.AUTH_USER_MODEL, related_name='posts', on_delete=models.CASCADE, null=True)
    liked_by = models.ManyToManyField(to=settings.AUTH_USER_MODEL, related_name='liked_posts', blank=True)
    updated = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'Post {self.id}: {self.title}'
