import logging
from api.blueprints import mongo
from api.blueprints.auth import api

logger = logging.getLogger(__name__)


class Photos:
    @staticmethod
    def list_files():
        return list(mongo.db.photos.find({}, {'_id': 0}))

    @staticmethod
    def upload_file(payload):
        if mongo.db.photos.find_one({'url': payload.get('url')}):
            api.abort(409, 'Photo already exists')

        mongo.db.photos.insert_one(payload)

        return 'Success'

    @staticmethod
    def add_like(payload):
        if mongo.db.photos.find_one({'url': payload.get('photo_url')}):
            mongo.db.photos.update(
                {'url': payload.get('photo_url')},
                {'$inc': {'likes': 1}}
            )

        return 'Success'
