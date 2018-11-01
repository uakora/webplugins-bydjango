from django.urls import path
from . import views

urlpatterns = [
    path('demo01', views.demo01),
]