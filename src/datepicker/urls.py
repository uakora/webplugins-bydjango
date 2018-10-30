from django.urls import path
from . import views

urlpatterns = [
    path('my97', views.learn_my97, name='my97'),
]

