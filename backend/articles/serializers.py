from rest_framework import serializers
from .models import Article, ArticleImage

from accounts.serializers import UserSerializer


class ArticleSerializer(serializers.ModelSerializer):
    # user = UserSerializer()

    class Meta:
        model = Article
        fields = '__all__'


class ArticleImageSerializer(serializers.ModelSerializer):
    # image = serializers.ImageField(use_url=True)

    class Meta:
        model = ArticleImage
        fields = '__all__'
