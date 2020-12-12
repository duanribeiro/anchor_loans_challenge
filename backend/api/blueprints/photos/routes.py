from flask_restplus import Resource
from .services import Photos
from api.blueprints.photos import api
import boto3
from flask_restplus import reqparse
import werkzeug
import os
from werkzeug.datastructures import FileStorage


@api.route('/upload_file')
class Endpoint(Resource):

    @api.doc(responses={
        200: 'Success',
        500: 'Internal server error'
    }, security=None)
    def post(self):
        """
        Function to upload a file on database
        """
        return Photos.upload_file(api.payload)


@api.route('/list_files')
class Endpoint(Resource):

    @api.doc(responses={
        200: 'Success',
        500: 'Internal server error'
    }, security=None)
    def get(self):
        """
        Function to list files on database
        """
        return Photos.list_files()


@api.route('/add_like')
class Endpoint(Resource):

    @api.doc(responses={
        200: 'Success',
        500: 'Internal server error'
    }, security=None)
    def post(self):
        """
        Function to add a like to a photo
        """
        return Photos.add_like(api.payload)
