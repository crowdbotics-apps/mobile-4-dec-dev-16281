from rest_framework import authentication
from ytyt.models import HGgfhgfh
from .serializers import HGgfhgfhSerializer
from rest_framework import viewsets


class HGgfhgfhViewSet(viewsets.ModelViewSet):
    serializer_class = HGgfhgfhSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = HGgfhgfh.objects.all()
