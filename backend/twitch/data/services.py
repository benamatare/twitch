from .config import client_id as key
from .config import base_url  as url
import requests

from .models import Game, Log


def data_fetch(key = key, url = url):
    headers = {'Client-ID' : key}
    req = requests.get(url, headers = headers)
    req = req.json()
    req = req['top']

    for entry in req:
        views = entry['viewers']
        channels = entry['channels']
        game_id = entry['game']['_id']
        name = entry['game']['name']
       
    #    If the Game has been logged, just add a new Data Log
        if Game.objects.filter(api_id = game_id):
            print('LOGGING: ', Game.objects.get(api_id = game_id))

            log = Log.objects.create(
                parent = Game.objects.get(api_id = game_id), 
                views = views, 
                channels = channels
            ) 
        # If the Game has never been logged, add a new Game &  corresponding Data Log
        else:
            print('CREATING & LOGGING: ', name)
            game = Game.objects.create(
                name = name, 
                api_id = game_id
            )
            log = Log.objects.create(
                parent = game, 
                views = views, 
                channels = channels
            )
