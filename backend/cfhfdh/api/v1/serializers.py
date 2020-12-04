from rest_framework import serializers
from cfhfdh.models import Fghgjyj


class FghgjyjSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fghgjyj
        fields = "__all__"
