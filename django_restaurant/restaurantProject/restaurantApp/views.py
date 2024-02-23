from django.shortcuts import render
from .models import Menu, Book, ContactUs
from .serializers import MenuSerializer, BookSerializer, ContactUsSerializer
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated

# Create your views here.
def index(request):
    return render(request, 'restaurantApp/home.html')

def menuItemsView(request):
    menuItemsView = Menu.objects.all()
    
    context = {
            'menuItemsView' : menuItemsView,
            'Menu': Menu
              }
    
    return render(request, 'restaurantApp/menu.html', context)

def menuOneItemView(request, slug):
    menuOneItemView = Menu.objects.get(slug=slug)
    context = {'menuOneItemView' : menuOneItemView}
    return render(request, 'restaurantApp/menu_item.html', context)

def BookView(request):
    context={}
    if request.method=="POST" :
        name=request.POST.get('customer_name')
        number_of_guests = request.POST.get('number_of_guests')
        bookingDate = request.POST.get('bookingDate')
        bookingTime = request.POST.get('bookingTime')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        Book.objects.create(
            name=name, 
            number_of_guests=number_of_guests,
            bookingDate=bookingDate,
            bookingTime=bookingTime,
            email=email,
            phone=phone,
            )
    
    return render(request, 'restaurantApp/book.html')
    
def ContactUsView(request):
    if request.method == "POST":
        title = request.POST.get('title')
        name = request.POST.get('name')
        description = request.POST.get('description')
        customerEmail = request.POST.get('email')
        ContactUs.objects.create(
            title=title,
            name=name,
            description=description,
            customerEmail=customerEmail
        )

    context={}
    return render(request, 'restaurantApp/contact_us.html')

