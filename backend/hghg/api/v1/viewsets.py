from rest_framework import authentication
from hghg.models import Bggfhgfhgf
from .serializers import BggfhgfhgfSerializer
from rest_framework import viewsets


class BggfhgfhgfViewSet(viewsets.ModelViewSet):
    serializer_class = BggfhgfhgfSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Bggfhgfhgf.objects.all()
