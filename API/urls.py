
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('subject/', views.SubjectList, name='subject'),
    path('subject/<int:subject_id>/',
         views.SubjectDetail, name='subject_details'),
    path('author/', views.AuthorList, name='author_list'),
    path('author/<int:author_id>/',
         views.AuthorDetail, name='author_details'),
    path('article/',
         views.ArticleList, name='article'),
    path('article/<int:article_id>/',
         views.ArticleDetail, name='article_details'),
]
