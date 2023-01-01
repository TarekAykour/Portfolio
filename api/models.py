from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(null=True,max_length=255)
    link = models.CharField(null=True, max_length=750)
    description = models.CharField(null=True, max_length=1000)
