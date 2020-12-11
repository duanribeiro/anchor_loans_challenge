#!/bin/bash
chmod +x ./wait-for-it.sh
./wait-for-it.sh -t 180 mssql_db:1433

python3 manage.py db migrate
python3 manage.py db upgrade
python3 app.py
