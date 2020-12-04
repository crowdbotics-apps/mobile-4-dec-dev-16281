from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BggfhgfhgfViewSet

router = DefaultRouter()
router.register("bggfhgfhgf", BggfhgfhgfViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
