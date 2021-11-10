from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.


@csrf_exempt
def index(request):
    if request.method == 'GET':
        return JsonResponse({'msg': 'welcome to soft diary'}, status=200)
    else:
        return JsonResponse({"msg": "GET request only"}, status=404)
