import logging
from logging.config import dictConfig


logger = logging.getLogger(__name__)


class BaseConfig:
    DEBUG = True
    RESTPLUS_VALIDATE = True
    ERROR_INCLUDE_MESSAGE = False
    RESTPLUS_MASK_SWAGGER = False
    PROPAGATE_EXCEPTIONS = True


class DevConfig(BaseConfig):
    MONGO_URI = "mongodb+srv://duanribeiro:BJ183r32@futebol-iwbwh.mongodb.net/playground?authSource=admin"


class ProdConfig(BaseConfig):
    DEBUG = False


dictConfig({
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "simple": {
            "format": "[%(levelname)s] - [%(asctime)s] - %(name)s - %(message)s"
        }
    },
    "handlers": {
        "console": {
            "class": "logging.StreamHandler",
            "level": "DEBUG",
            "formatter": "simple",
        }
    },
    "loggers": {
        "werkzeug": {
            "level": "INFO",
            "handlers": ["console"],
            "propagate": False
        }
    },
    "root": {
        "level": "DEBUG",
        "handlers": ["console"]
    }
})
