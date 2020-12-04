from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import HGgfhgfhViewSet

router = DefaultRouter()
router.register("hggfhgfh", HGgfhgfhViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
