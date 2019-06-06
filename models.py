from django.db import models

class BlogEntry(models.Model):
    heading = models.CharField(max_length=20)
    body = models.CharField(max_length=10000)
