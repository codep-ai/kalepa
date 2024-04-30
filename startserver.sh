php artisan serve --host=0.0.0.0 --port=8000 >/dev/null &

rsync -avL --delete --progress -e "ssh -i ~/.ssh/Linux-CodeCambat.pem"  --exclude "vendor" --exclude "storage" ~/git/kalepa/*  ec2-user@3.55.219.134:/var/www/kalepa/

npm run watch-poll 
