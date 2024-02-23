from django.db import models
from django import utils
from django.utils.text import slugify
import datetime
#some of the code is based on the instructions from the Coursera Meta Back-End developer Capstone
#course, which I've taken and fully completed

class Book(models.Model):
    name = models.CharField(max_length=100)
    number_of_guests = models.IntegerField(default=2)
    bookingDate = models.DateField(default=utils.timezone.now)
    bookingTime = models.TimeField(default=utils.timezone.now)
    email = models.EmailField(default='')
    phone = models.IntegerField(default=0)
    isConfirmed = models.BooleanField(default=False)
    class Meta:
        verbose_name = 'reservation'
        verbose_name_plural = 'reservations'
    
    def __str__(self):
        date = str(self.bookingDate)
        date = date[:11]
        time = str(self.bookingTime)
        time = time[:5]
        cust_name = str(self.name).upper()
        if self.isConfirmed:
            conf = "CONFIRMED"
        else:
            conf = "NOT_confirmed"
        return f"{conf} | {date} at {time} for {cust_name} "

class Menu(models.Model):
    id = models.DecimalField(primary_key=True, max_digits=10, decimal_places=0)
    title = models.CharField(max_length=100)
    description=models.CharField(max_length=255, default="")
    price = models.DecimalField(max_digits=8, decimal_places=2)
    inventory = models.DecimalField(max_digits=5, decimal_places=0)
    isPopular = models.BooleanField(default=False)
    image = models.ImageField(upload_to='meals/', default="")
    slug = models.SlugField(blank=True, null=True, unique=True)
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super(Menu, self).save(*args, **kwargs)
        
    
    class Meta:
        verbose_name = 'Menu_Item'
        verbose_name_plural = 'Menu_Items'
    def __str__(self):
	    return self.title

class ContactUs(models.Model):
    id = models.DecimalField(primary_key=True, max_digits=10, decimal_places=0)
    name = models.CharField(max_length=100, default="anonymous")
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=255)
    customerEmail = models.EmailField()
    isResolved = models.BooleanField(default=False)
    class Meta:
        verbose_name = 'Customer service request'
        verbose_name_plural = 'Customer service requests'
    def __str__(self):
        if self.isResolved:
            conf = "RESOLVED"
        else:
            conf = "NOT resolved"
        return f"{conf}: \"{self.title}\""