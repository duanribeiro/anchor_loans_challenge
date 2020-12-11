from flask_restplus import Resource
from .services import Questions
from .serializers import question
from api.blueprints.game import api


@api.route('/question')
class Question(Resource):

    @api.doc(responses={
        200: 'Success',
        500: 'Internal server error'
    }, security=None)
    @api.marshal_with(question)
    def get(self):
        """
        Return a question
        """
        return Questions.get_question()

