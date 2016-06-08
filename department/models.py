from django.db import models

class Department(models.Model):
	id = models.AutoField(primary_key = True)
	name = models.CharField(max_length = 20)
	description = models.CharField(max_length = 1000)
