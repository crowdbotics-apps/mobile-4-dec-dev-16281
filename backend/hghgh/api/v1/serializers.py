from rest_framework import serializers
from hghgh.models import GGHgh


class GGHghSerializer(serializers.ModelSerializer):
    class Meta:
        model = GGHgh
        fields = "__all__"
