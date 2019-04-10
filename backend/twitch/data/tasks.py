from celery.task.schedules import crontab
from celery.decorators import periodic_task
from celery.utils.log import get_task_logger

from .services import data_fetch

logger  = get_task_logger(__name__)

@periodic_task(
    run_every = (crontab(minute='*/60')),
    name = 'get_data_from_twitch_api',
    ignore_result = True
)
def get_data_from_twitch_api():
    data_fetch()
    logger.info('LOGGED')