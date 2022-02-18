from django.contrib import admin

# Register your models here.
from .models import Article, ArticleImage


class ArticleAdmin(admin.ModelAdmin):
    fields = ['title', 'content']


class ArticleImageAdmin(admin.ModelAdmin):
    fields = ['image']


admin.site.register(Article, ArticleAdmin)
admin.site.register(ArticleImage, ArticleImageAdmin)

