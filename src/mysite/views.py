from django.shortcuts import render

# Create your views here.
def page_index(request):
    return render(request, 'index.html')