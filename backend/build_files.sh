
echo "BUILD START"
python -m pip install -r requirements.txt
python3 manage.py collectstatic --no-input --clear
echo "BUILD END"
