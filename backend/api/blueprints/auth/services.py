import logging
from api.blueprints import db
from bcrypt import hashpw, checkpw, gensalt
from .models import Users

logger = logging.getLogger(__name__)


def encrypt_password(password):
    return hashpw(password.encode('utf-8'), gensalt()).decode('utf-8')


def check_password(sent, expected):
    return checkpw(sent.encode('utf-8'), expected.encode('utf-8'))


class Auth:
    @staticmethod
    def check_login(payload):
        username = payload.get('username')
        password = payload.get('password')

        user = Users.query.filter_by(USERNAME=username).first()

        if not user:
            return 401

        user = user.__dict__
        if not check_password(password, user.get('PASSWORD')):
            return 402

        return 200

    @staticmethod
    def new_user(payload):
        user = Users.query.filter_by(USERNAME=payload['username']).first()
        if user:
            return 409

        new_user = Users(username=payload['username'], password=encrypt_password(payload['password']))
        db.session.add(new_user)
        db.session.commit()

        return 201
