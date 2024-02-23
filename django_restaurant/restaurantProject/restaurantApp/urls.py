from django.urls import path, include
from . import views
import re
from rest_framework.authtoken.views import obtain_auth_token

app_name = 'restaurantApp'

urlpatterns = [
    path('', views.index, name='index'),
    path('menu/', views.menuItemsView, name='menu'),
    path('<slug:slug>', views.menuOneItemView, name='menu_item'),
    path('book/', views.BookView, name='book'),
    path('contact/', views.ContactUsView, name='contact_us'),
]