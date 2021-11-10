from django.http.response import JsonResponse
from django.shortcuts import render, HttpResponse
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt

from .serializer import SubjectSerializer, AuthorSerializer, ArticleSerializer
from .models import Subject, Author, Article
# Create your views here.

# domain/api


@csrf_exempt
def index(request):
    print("index")
    if request.method == 'GET':
        return JsonResponse({"msg": "Welcome to soft diary"}, status=200)
    else:
        return JsonResponse({"msg": "GET request only"}, status=404)


@csrf_exempt
def SubjectList(request):
    if request.method == 'GET':
        subjects = Subject.objects.all()
        # if no subject found
        if subjects == None:
            return JsonResponse({"msg": "Subject not found"}, status=404)
        serializer = SubjectSerializer(subjects, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({"msg": "GET request only"}, status=404)


@csrf_exempt
def SubjectDetail(request, subject_id):
    if request.method == 'GET':
        subjects = Subject.objects.filter(id=subject_id)
        # if requested subject no found
        print(subjects)
        if not subjects.exists():
            return JsonResponse({"msg": "Requested subject no found"}, status=404)
        serializer = SubjectSerializer(subjects, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({"msg": "GET request only"}, status=403)


@csrf_exempt
def AuthorList(request):
    if request.method == 'GET':
        authors = Author.objects.all()
        # if no author found
        if not authors.exists():
            return JsonResponse({"msg": "Author not found"}, status=404)

        serializer = AuthorSerializer(authors, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({"msg": "GET request only"}, status=403)


@csrf_exempt
def AuthorDetail(request, author_id):
    if request.method == 'GET':
        author = Author.objects.filter(id=author_id)
        # if requested author no found
        if not author.exists():
            return JsonResponse({"msg": "Author not found"}, status=404)
        serializer = AuthorSerializer(author, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({"msg": "GET request only"}, status=403)


@csrf_exempt
def ArticleList(request):
    if request.method == 'GET':
        articles = Article.objects.all()
        # if no article found
        if not articles.exists():
            return JsonResponse({"msg": "Author not found"}, status=404)

        serializer = ArticleSerializer(articles, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({"msg": "GET request only"}, status=403)


@csrf_exempt
def ArticleDetail(request, article_id):
    if request.method == 'GET':
        article = Article.objects.filter(id=article_id)
        # if requested article no found
        if not article.exists():
            return JsonResponse({"msg": "Author not found"}, status=404)
        serializer = ArticleSerializer(article, many=True)
        return JsonResponse(serializer.data, safe=False)
    else:
        return JsonResponse({"msg": "GET request only"}, status=403)
