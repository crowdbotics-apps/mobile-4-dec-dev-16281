from rest_framework import authentication
from gfgf.models import Ghgfhgf
from .serializers import GhgfhgfSerializer
from rest_framework import viewsets


class GhgfhgfViewSet(viewsets.ModelViewSet):
    serializer_class = GhgfhgfSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Ghgfhgf.objects.all()
