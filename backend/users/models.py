from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=100, blank=True)
    age = models.IntegerField(null=True, blank=True)
    gender = models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.username