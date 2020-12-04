from rest_framework import authentication
from yututuyt.models import JHGHJG
from .serializers import JHGHJGSerializer
from rest_framework import viewsets


class JHGHJGViewSet(viewsets.ModelViewSet):
    serializer_class = JHGHJGSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = JHGHJG.objects.all()
