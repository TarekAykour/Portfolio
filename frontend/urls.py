from django.urls import path
from .views import index

urlpatterns = [
    path('',index),
    path('contact',index),
    path('portfolio', index),
    path('journey', index)
]