#!/bin/bash
echo "BUILD START"
mkdir -p staticfiles_build/static
python -m pip install --upgrade pip
python -m pip install -r backend/requirements.txt

# Run migrations and collect static files
python manage.py makemigrations --noinput
python manage.py migrate --noinput
python manage.py collectstatic --no-input --clear
echo "BUILD END"
ls -la staticfiles_build  # Debug: list the directory contents
