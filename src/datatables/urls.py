from django.urls import path
from . import views

urlpatterns = [
    path('demo01', views.demo01),
    path('demo02', views.demo02),
    path('demo03', views.demo03),
    path('demo04', views.demo04),
]