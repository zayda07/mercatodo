from django.db import models

# Create your models here.
class Products(models.Model):
  pro_name = models.CharField(max_length=50)
  pro_provider = models.CharField(max_length=50)
  pro_existences = models.PositiveBigIntegerField()
  pro_date = models.DateField()
  pro_description = models.CharField(max_length=150)
  pro_category = models.CharField(max_length=50)