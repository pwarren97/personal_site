from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Admin(models.Model):
    username = models.CharField(max_length=20)
    password = models.CharField(max_length=20)

    def __str__(self):
        return self.username

class BlogEntry(models.Model):
    pub_date = models.DateField()
    edit_date = models.DateField()
    title = models.CharField(max_length=40)
    entry = models.TextField()

    def __str__(self):
        return self.title
