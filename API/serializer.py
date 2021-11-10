# import djanog rest framework serializer
from .models import Article, Author, Subject
from rest_framework import serializers


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['title', 'image', 'subject_type', ]


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['first_name', 'last_name', 'profession',
                  'institution', 'join_date', 'last_update']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['title', 'subject', 'description',
                  'author', 'date_published', 'last_update']

