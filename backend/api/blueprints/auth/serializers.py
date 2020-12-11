from api.blueprints.game import api
from flask_restplus import fields

login = api.model('Login', {
    'username': fields.String(required=True, description='Username'),
    'password': fields.String(required=True, description='Password')
})
