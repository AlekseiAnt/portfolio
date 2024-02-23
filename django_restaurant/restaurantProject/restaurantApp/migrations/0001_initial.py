# Generated by Django 5.0.1 on 2024-01-22 03:45

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('number_of_guests', models.IntegerField(default=2)),
                ('bookingDate', models.DateField(default=django.utils.timezone.now)),
                ('bookingTime', models.TimeField(default=django.utils.timezone.now)),
                ('email', models.EmailField(default='', max_length=254)),
                ('phone', models.IntegerField(default=0)),
                ('isSpecialEvent', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'reservation',
                'verbose_name_plural': 'reservations',
            },
        ),
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.DecimalField(decimal_places=0, max_digits=10, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=255)),
                ('customerEmail', models.EmailField(max_length=254)),
            ],
            options={
                'verbose_name': 'Customer service request',
                'verbose_name_plural': 'Customer service requests',
            },
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.DecimalField(decimal_places=0, max_digits=10, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('inventory', models.DecimalField(decimal_places=0, max_digits=5)),
                ('isPopular', models.BooleanField(default=False)),
                ('image', models.ImageField(default='', upload_to='restaurantApp/')),
            ],
            options={
                'verbose_name': 'Menu Item',
                'verbose_name_plural': 'Menu Items',
            },
        ),
    ]