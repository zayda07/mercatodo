# Generated by Django 3.2.7 on 2021-10-13 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='pro_date',
            field=models.DateTimeField(),
        ),
    ]
