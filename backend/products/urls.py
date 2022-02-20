from django.urls import path, include
from .views import ProductViewSet, ProductImageViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', ProductViewSet)
router.register(r'', ProductImageViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('image/', include(router.urls))
]
