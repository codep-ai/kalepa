INSTALL PHP:

sudo yum install -y amazon-linux-extras
sudo  amazon-linux-extras | grep php
sudo amazon-linux-extras enable php7.4
sudo yum clean metadata
sudo yum install php php-{pear,cgi,common,curl,mbstring,gd,mysqlnd,gettext,bcmath,json,xml,fpm,intl,zip,imap}

INSTALL NGINX
amazon-linux-extras install nginx1

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

s3://dev-demo-land-area/dms/Sales/House/kc_house_data.csv

ssh -i Linux-CodeCambat.pem ec2-user@54.252.52.66


---------------------------------------------------
build and run it in mac step by step
---------------------------------------------------
1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  # install php
2 brew install php
3 brew install php-cs-fixer
4 php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# install php related docker composer
5 php composer-setup.php
# preparation of installation nvm
6 chmod 777 ~/.zshrc
# install nvm 
7 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
# install node
8  . ~/.nvm/nvm.sh; 
     nvm install node
#.  clone git repo
9   git clone https://github.com/codep-ai/kalepa.git

# startup the project
10 cd kalepa
npm install

# install composer 
11 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install composer
composer --version

12 composer update 
composer install

# install mysql DB
13 brew install mariadb

#To start mariadb now and restart at login:
 # brew services start mariadb
#Or, if you don't want/need a background service you can just run:
 # /usr/local/opt/mariadb/bin/mysqld_safe --datadir\=/usr/local/var/mysql

# use OS admin to set up DB admin password (root@localhost ) —have to use sudo to run as the OS admin
#  after run below cmd, there are auto-generated multiple steps of prompt to setup DB admin pwd
 sudo mysql_secure_installation
# 

# install mysql client and server
14  https://dbeaver.io/   to download dbeaver for Mac

# connect to mariadb to create database and tables
# open dbeaver -> new connector ->  host: localhost; port: 3306

# create db
create database kalepa
use kalepa

run kalepa.sql


15 nom run dev


