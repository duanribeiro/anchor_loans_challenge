from api.blueprints.game import api
from flask_restplus import fields


question = api.model('Question', {
    'category': fields.String(required=True, description='category'),
    'correct_answer': fields.String(required=True, description='correct_answer'),
    'difficulty': fields.String(required=True, description='difficulty'),
    'incorrect_answers': fields.List(fields.String(required=True, description='incorrect_answers')),
    'question': fields.String(required=True, description='question'),
})
