from django.db import models
from django.conf import settings


class Article(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, verbose_name="제목")
    content = models.TextField(verbose_name="내용")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="등록 날짜")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="수정 날짜")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = '클래스'
        verbose_name_plural = '클래스'


class ArticleImage(models.Model):
    image = models.ImageField(upload_to="media/articles/%Y/%m/%d", verbose_name="이미지")

    def __str__(self):
        return str(self.image)
    
    class Meta:
        verbose_name = '클래스 이미지'
        verbose_name_plural = '클래스 이미지'
