from django.contrib import admin

# Register your models here.
from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    fields = ['user', 'title', 'content']


admin.site.register(Article, ArticleAdmin)
