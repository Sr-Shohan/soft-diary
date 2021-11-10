from django.contrib import admin

from .models import *

# Register your models here.
admin.site.site_header = "SoftDiary Admin"
admin.site.site_title = "SoftDiary Admin Portal"
admin.site.index_title = "Welcome to SoftDiary Admin Portal"


admin.site.register(Images)

# list view of model in admin page


class AuthorAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'profession',
                    'institution', 'join_date', 'last_update']
    search_fields = ('join_date,profession',)
    list_per_page = 25


admin.site.register(Author, AuthorAdmin)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ['title', 'description',
                    'author', 'date_published', 'last_update']


admin.site.register(Article, ArticleAdmin)


class SubjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'image', 'subject_type']


admin.site.register(Subject, SubjectAdmin)


class LikeAdmin(admin.ModelAdmin):
    list_display = ['user', 'article', 'date_liked']


admin.site.register(Like, LikeAdmin)


class CommentAdmin(admin.ModelAdmin):
    list_display = ['user', 'comment', 'article', 'date_commented']


admin.site.register(Comment, CommentAdmin)
