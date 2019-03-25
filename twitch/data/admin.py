from django.contrib import admin
from .models import Game, Log

admin.site.register([Game, Log])