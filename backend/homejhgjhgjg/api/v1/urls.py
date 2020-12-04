from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JHGjfhgViewSet

router = DefaultRouter()
router.register("jhgjfhg", JHGjfhgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
