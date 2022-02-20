from rest_framework.viewsets import ModelViewSet
from .models import Product
from .serializers import ProductSerializer, ProductImageSerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all().order_by('-id')
    serializer_class = ProductSerializer


class ProductImageViewSet(ModelViewSet):
    queryset = Product.objects.all().order_by('-id')
    serializer_class = ProductImageSerializer
