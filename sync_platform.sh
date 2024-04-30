#php artisan serve --host=0.0.0.0 --port=8000 >/dev/null &

#rsync -avL --delete --progress -e "ssh -i ~/.ssh/Linux-CodeCambat.pem"  --exclude "vendor" --exclude "storage" ~/git/kalepa/*  ec2-user@3.104.173.220:/var/www/kalepa/
rsync -avL --delete --progress -e "ssh -i ~/.ssh/Linux-CodeCambat.pem"  --exclude "storage" ~/git/kalepa/*  ec2-user@3.104.173.220:/var/www/kalepa/

#npm run watch-poll 
