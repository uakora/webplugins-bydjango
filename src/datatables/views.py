from django.shortcuts import render

# Create your views here.
def demo01(request):
    return render(request, 'demo01.html')

def demo02(request):
    return render(request, 'demo02.html')

def demo03(request):
    return render(request, 'demo03.html')