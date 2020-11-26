from django.conf import settings
from django.db import models


class Friend(models.Model):

    choices = [
        ('p', 'Pending'),
        ('a', 'Accepted'),
        ('r', 'Rejected')
    ]

    sender = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='requests_sent')
    receiver = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='requests_received')
    status = models.CharField(max_length=1, choices=choices, default='p')

    class Meta:
        unique_together = ['sender', 'receiver']

    def __str__(self):
        return f'{self.sender.username} - {self.receiver.username} - {self.status}'