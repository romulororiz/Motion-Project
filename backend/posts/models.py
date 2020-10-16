from django.db import models
from users.models import User


class Post(models.Model):
    title = models.CharField(max_length=200)
    text_content = models.TextField(max_length=400)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(to=User, related_name='posts', on_delete=models.CASCADE, null=True)
    liked_by = models.ManyToManyField(to=User, related_name='liked_posts', blank=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f'Post {self.id}: {self.title}'


    