# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restplus import Api
from api.blueprints.game.routes import api as namespace_questions
from api.blueprints.auth.routes import api as namespace_auth

v1_blueprint = Blueprint('v1', __name__, url_prefix='')

api = Api(
    v1_blueprint,
    doc='/docs',
    title='Game Quiz API',
    version='0.0.1',
    description='O principal objetivo desta API é facilitar a manipulação do banco de dados.',
)

api.add_namespace(namespace_questions)
api.add_namespace(namespace_auth)
