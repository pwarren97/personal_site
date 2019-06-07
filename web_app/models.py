# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Representative of a particular entry
class BlogEntry(models.Model):
    heading = models.CharField(max_length=20)
    body = models.CharField(max_length=10000)
    pub_date = models.DateField()
    edit_date = models.DateField()

# Admin is a user profile accessible through a hidden URL
class Admin(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
