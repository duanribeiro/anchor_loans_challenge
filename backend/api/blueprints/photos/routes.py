from flask_restplus import Resource
from .services import Questions
from .serializers import question
from api.blueprints.photos import api
import boto3


@api.route('/upload_file')
class Endpoint(Resource):

    @api.doc(responses={
        200: 'Success',
        500: 'Internal server error'
    }, security=None)
    def post(self):
        """
        Function to upload a file to an S3 bucket
        """
        object_name = api.payload['file_name']
        s3_client = boto3.client('s3')
        response = s3_client.upload_file(api.payload['file_name'], api.payload['bucket'], object_name)

        return response


@api.route('/list_files')
class Endpoint(Resource):

    @api.doc(responses={
        200: 'Success',
        500: 'Internal server error'
    }, security=None)
    def post(self):
        """
        Function to list files in a given S3 bucket
        """
        s3 = boto3.client('s3')
        contents = []
        for item in s3.list_objects(Bucket=api.payload['bucket'])['Contents']:
            contents.append(item)

        return contents
