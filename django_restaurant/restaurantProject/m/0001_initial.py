# Generated by Django 5.0.1 on 2024-01-20 00:35

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('id', models.DecimalField(decimal_places=0, max_digits=10, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('number_of_guests', models.DecimalField(decimal_places=0, max_digits=6)),
                ('bookingDate', models.DateTimeField()),
                ('isSpecialEvent', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Careers',
            fields=[
                ('id', models.DecimalField(decimal_places=0, max_digits=10, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=255)),
                ('starting_salary', models.DecimalField(decimal_places=2, max_digits=10)),
            ],
        ),
        migrations.CreateModel(
            name='Menu',
            fields=[
                ('id', models.DecimalField(decimal_places=0, max_digits=10, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('price', models.DecimalField(decimal_places=2, max_digits=8)),
                ('inventory', models.DecimalField(decimal_places=0, max_digits=5)),
            ],
        ),
    ]
