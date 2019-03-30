from celery.task.schedules import crontab
from celery.decorators import periodic_task
from celery.utils.log import get_task_logger

from .services import data_fetch

logger  = get_task_logger(__name__)

@periodic_task(
    run_every = (crontab(minute=0, hour=0)),
    name = 'update_data_with_data_fetch',
    ignore_result = True
)
def update_data_with_data_fetch():
    data_fetch()
    logger.info('Data fetch hit')