from rest_framework import authentication
from cfhfdh.models import Fghgjyj
from .serializers import FghgjyjSerializer
from rest_framework import viewsets


class FghgjyjViewSet(viewsets.ModelViewSet):
    serializer_class = FghgjyjSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Fghgjyj.objects.all()
