from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.mixins import NestedViewSetMixin

from .serializers import GameSerializer, LogSerializer
from .models import Game, Log


class GameViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = GameSerializer
    queryset = Game.objects.all()


class LogViewSet(NestedViewSetMixin, ModelViewSet):
    serializer_class = LogSerializer
    queryset = Log.objects.all()