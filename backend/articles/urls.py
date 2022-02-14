from django.urls import path
from .views import ArticleListAPI, ArticleDetailAPI, ArticleImageListAPI

app_name = 'articles'

urlpatterns = [
    path('', ArticleListAPI.as_view()),
    path('<int:pk>/', ArticleDetailAPI.as_view()),
    path('image/', ArticleImageListAPI.as_view()),
]
