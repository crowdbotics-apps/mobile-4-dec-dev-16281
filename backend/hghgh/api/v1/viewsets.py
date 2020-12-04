from rest_framework import authentication
from hghgh.models import GGHgh
from .serializers import GGHghSerializer
from rest_framework import viewsets


class GGHghViewSet(viewsets.ModelViewSet):
    serializer_class = GGHghSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = GGHgh.objects.all()
