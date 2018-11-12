from django.shortcuts import render


# Create your views here.
def page_index(request):
    return render(request, 'index.html')


def page_test01(request):
    return render(request, 'test01.html')