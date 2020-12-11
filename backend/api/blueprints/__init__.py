from flask import Flask
from flask_pymongo import PyMongo


mongo = PyMongo()


def create_app():
    app = Flask(__name__)
    app.config.from_object("config.DevConfig")
    mongo.init_app(app)

    return app
