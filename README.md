INSTALL PHP:

sudo yum install -y amazon-linux-extras
sudo  amazon-linux-extras | grep php
sudo amazon-linux-extras enable php7.4
sudo yum clean metadata
sudo yum install php php-{pear,cgi,common,curl,mbstring,gd,mysqlnd,gettext,bcmath,json,xml,fpm,intl,zip,imap}

INSTALL NGINX

install git

install composer
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

install node:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node

git clone https://github.com/hengruili/kalepa.git
npm install
composer install

install mariadb
sudo  amazon-linux-extras | grep mariadb
sudo yum install MariaDB-server MariaDB-client

create database kalepa
use kalepa
run kalepa.sql