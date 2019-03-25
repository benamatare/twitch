from rest_framework.serializers import ModelSerializer
from .models import Game, Log

class GameSerializer(ModelSerializer):
    class Meta:
        model = Game
        fields = ('id', 'name', 'api_id')


class LogSerializer(ModelSerializer):
    class Meta:
        model = Log
        fields = ('id', 'parent', 'views', 'channels', 'logged_at')