from rest_framework.routers import DefaultRouter
from rest_framework_extensions.routers import NestedRouterMixin
from data.views import GameViewSet, LogViewSet

class NestedDefaultRouter(NestedRouterMixin, DefaultRouter):
    pass

router = NestedDefaultRouter()

game_router = router.register('game', GameViewSet)
game_router.register(
    'logs', LogViewSet,
    base_name = 'games-logs',
    parents_query_lookups = ['parent']
)



