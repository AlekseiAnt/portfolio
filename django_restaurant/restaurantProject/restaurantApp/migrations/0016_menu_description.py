# Generated by Django 5.0.1 on 2024-01-22 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurantApp', '0015_alter_menu_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='description',
            field=models.CharField(default='', max_length=255),
        ),
    ]