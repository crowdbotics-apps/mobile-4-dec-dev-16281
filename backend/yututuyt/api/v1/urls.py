from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JHGHJGViewSet

router = DefaultRouter()
router.register("jhghjg", JHGHJGViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
