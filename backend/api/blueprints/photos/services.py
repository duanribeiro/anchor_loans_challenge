import logging
import requests


logger = logging.getLogger(__name__)


class Questions:

    @staticmethod
    def get_question():
        response = requests.get('https://opentdb.com/api.php?amount=1&type=multiple')
        question = response.json()['results'][0]

        return question
