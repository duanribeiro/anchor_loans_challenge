import logging
from api.blueprints import create_app, db
from api import v1_blueprint
from flask_cors import CORS

app = create_app()
CORS(app)
app.register_blueprint(v1_blueprint)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5003)

else:
    gunicorn_logger = logging.getLogger('gunicorn.error')
    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)
