#!/bin/bash
echo "BUILD START"
python3 -m pip install -r requirements.txt
python3 manage.py collectstatic --no-input --clear
mv staticfiles staticfiles_build  # Rename to what Vercel expects
echo "BUILD END"
