# Generated by Django 3.2.8 on 2021-10-12 04:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pro_name', models.CharField(max_length=50)),
                ('pro_provider', models.CharField(max_length=50)),
                ('pro_existences', models.PositiveBigIntegerField()),
                ('pro_date', models.DateField()),
                ('pro_description', models.CharField(max_length=150)),
                ('pro_category', models.CharField(max_length=50)),
            ],
        ),
    ]
