from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import FghgjyjViewSet

router = DefaultRouter()
router.register("fghgjyj", FghgjyjViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
