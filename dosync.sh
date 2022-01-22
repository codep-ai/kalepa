rsync -avL --delete --progress -e "ssh -i /home/hli/aws/kalepa.pem" --exclude "node_modules" --exclude "vendor" --exclude "storage" /home/hli/Lab/kalepa/*  ec2-user@ec2-3-25-207-19.ap-southeast-2.compute.amazonaws.com:/var/www/kalepa/

