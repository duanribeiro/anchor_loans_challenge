from flask_restplus import Resource, Namespace
from api.blueprints import mongo
from .helpers import check_password
from .serializers import login
import logging

api = Namespace('auth', 'Authentication')
logger = logging.getLogger(__name__)


@api.route('/login')
class Login(Resource):

    @api.expect(login)
    @api.doc(responses={
        200: 'Success',
        400: 'Username or password is a required property',
        404: 'User not found',
        401: 'Unauthorized'
    }, security=None)
    def post(self):
        """
        Authentication endpoint
        """
        username = api.payload.get('username')
        password = api.payload.get('password')

        user = mongo.db.users.find_one({'username': username}, {'_id': 0})

        if not user:
            api.abort(404, 'User not found')

        if password != user.get('password'):
            api.abort(401, 'Unauthorized')

        return {
            'username': user.get('username'),
        }
