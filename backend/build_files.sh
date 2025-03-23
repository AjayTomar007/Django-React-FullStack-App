#!/bin/bash
echo "BUILD START"
mkdir -p staticfiles_build/static
python3.10 -m pip install -r requirements.txt
python3.10 manage.py collectstatic --no-input --clear
echo "BUILD END"
ls -la staticfiles_build  # Debug: list the directory contents
