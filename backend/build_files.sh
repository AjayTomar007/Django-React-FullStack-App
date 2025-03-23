#!/bin/bash
echo "BUILD START"
mkdir -p staticfiles_build/static
python3 -m pip install --upgrade pip
python3 -m pip install -r backend/requirements.txt

# Run migrations and collect static files
python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput
python3 manage.py collectstatic --no-input --clear
echo "BUILD END"
ls -la staticfiles_build  # Debug: list the directory contents
