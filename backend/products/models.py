from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100, verbose_name='상품명')
    thumbnail_image = models.ImageField(upload_to="media/products/%Y/%m/%d", verbose_name="썸네일 이미지")
    description = models.TextField(verbose_name='설명')
    price = models.IntegerField(verbose_name='가격')
    stock = models.IntegerField(verbose_name='재고')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='등록 날짜')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='수정 날짜')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = '상품'
        verbose_name_plural = '상품'


class ProductImage(models.Model):
    image = models.ImageField(upload_to="media/products/%Y/%m/%d", verbose_name="상품 이미지")

    def __str__(self):
        return str(self.image)

    class Meta:
        verbose_name = '상품 이미지'
        verbose_name_plural = '상품 이미지'
