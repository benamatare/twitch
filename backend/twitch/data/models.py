from djongo import models
from django.utils.timezone import now

class Game(models.Model):
    name = models.CharField(max_length = 100, blank = False)
    api_id = models.IntegerField(blank = False)
    
    def __str__(self):
        return self.name
 
class Log(models.Model):
    parent = models.ForeignKey(Game, on_delete = models.CASCADE)
    views = models.IntegerField(blank = False)
    channels = models.IntegerField(blank = False)
    logged_at = models.DateTimeField(default = now, editable = False)

    def __str__(self):
        return f"""{self.parent} {self.logged_at}"""
