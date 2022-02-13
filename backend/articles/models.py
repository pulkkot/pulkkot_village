from django.db import models
from django.conf import settings


class Article(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ArticleImage(models.Model):
    # article = models.ForeignKey(Article, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="article/%Y/%m/%d")

    def __str__(self):
        return str(self.image)
