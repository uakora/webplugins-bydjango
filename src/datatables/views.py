from django.shortcuts import render

# Create your views here.
def demo01(request):
    return render(request, 'demo01.html')