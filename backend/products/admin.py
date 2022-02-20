from django.contrib import admin
from .models import Product, ProductImage


# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    fields = ['name', 'description', 'price', 'stock', 'thumbnail_image']


class ProductImageAdmin(admin.ModelAdmin):
    fields = ['image']


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage, ProductImageAdmin)
