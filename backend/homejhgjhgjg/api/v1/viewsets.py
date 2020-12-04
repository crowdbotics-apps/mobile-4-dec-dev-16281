from rest_framework import authentication
from homejhgjhgjg.models import JHGjfhg
from .serializers import JHGjfhgSerializer
from rest_framework import viewsets


class JHGjfhgViewSet(viewsets.ModelViewSet):
    serializer_class = JHGjfhgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = JHGjfhg.objects.all()
