from rest_framework import serializers
from .models import Article, ArticleImage

from accounts.serializers import UserSerializer


class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ['id', 'title', 'created_at']


class ArticleImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = ArticleImage
        fields = ['image', ]


class ArticleSerializer(serializers.ModelSerializer):
    # user = UserSerializer()
    # images = ArticleImageSerializer(many=True, read_only=True)

    class Meta:
        model = Article
        fields = ['title', 'content']

    # def create(self, validated_data):
    #     images_data = self.context['request'].FILES
    #     article = Article.objects.create(**validated_data)
    #     for image_data in images_data.getlist('image'):
    #         ArticleImage.objects.create(article=article, image=image_data)
    #     return article
