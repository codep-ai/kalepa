rsync -ravL --delete --progress -e "ssh -i /home/hli/aws/donny.pem" --exclude "node_modules" --exclude "vendor" --exclude "storage" --exclude ".git" /home/hli/Lab/kalepa/  ec2-user@13.238.21.20:/var/www/kalepa/

