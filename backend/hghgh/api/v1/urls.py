from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GGHghViewSet

router = DefaultRouter()
router.register("gghgh", GGHghViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
