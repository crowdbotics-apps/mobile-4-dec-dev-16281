from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GhgfhgfViewSet

router = DefaultRouter()
router.register("ghgfhgf", GhgfhgfViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
