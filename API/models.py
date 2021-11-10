from django.db import models
# import django user model
from django.contrib.auth.models import User
# Create your models here.

# import ckeditoruploader to use ckeditor
from ckeditor_uploader.fields import RichTextUploadingField


class Subject(models.Model):
    # choices for subject
    SUBJECT_CHOICES = (
        ('tutorial', 'Tutorial_Subject'),
        ('interview', 'Interview_Subject')
    )
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='subjects/')
    subject_type = models.CharField(max_length=100, choices=SUBJECT_CHOICES)

    def __str__(self):
        return self.title


class Author(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    profession = models.CharField(max_length=50)
    institution = models.CharField(max_length=100)
    join_date = models.DateField(auto_now_add=True)
    last_update = models.DateField(auto_now=True)

    def __str__(self):
        return self.first_name + ' ' + self.last_name


class Article(models.Model):
    title = models.CharField(max_length=100)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    description = RichTextUploadingField()
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    date_published = models.DateField(auto_now_add=True)
    last_update = models.DateField(auto_now=True)

    def __str__(self):
        return self.title


class Images(models.Model):
    image = models.ImageField(upload_to='images/')
    article = models.ForeignKey(Article, on_delete=models.CASCADE)

    def __str__(self):
        return self.image.url


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    isLike = models.BooleanField(default=False)
    date_liked = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username + ' ' + self.article.title


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    comment = models.TextField()
    date_commented = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username + ' ' + self.article.title
