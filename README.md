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


15 # run the web service locally in ~/git/kalepa

./start.sh


################# this is the expect output  #######
linlindeMacBook-Pro:kalepa linlin$ ./start.sh

> watch-poll
> mix watch -- --watch-options-poll=1000

Browserslist: caniuse-lite is outdated. Please run:
  npx browserslist@latest --update-db
  Why you should do it regularly: https://github.com/browserslist/browserslist#browsers-data-updating

● Mix █████████████████████████ emitting (98%)  
 after emit




● Mix █████████████████████████ done (99%) plugins 
 WebpackBar:done

                      
   Laravel Mix v6.0.39   
                         

✔ Compiled Successfully in 11906ms
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┬──────────┐
│                                                                                                                                                                                      File │ Size     │
├───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┼──────────┤
│                                                                                                                                                                               /js/main.js │ 5.04 MiB │
│                                                                                                                                                                              css/main.css │ 6.9 MiB  │
│                                                                                                                                                                               js/error.js │ 20.1 KiB │
│                                                                                                                                                                               js/forms.js │ 71.6 KiB │
│                                                                                                                                                                               js/login.js │ 44 KiB   │
│                                                                                                                                                                             js/profile.js │ 81.8 KiB │
│                                                                                                                                                           js/resources_js_views_BI_vue.js │ 12.7 KiB │
│                                                                                                                                                        js/resources_js_views_Build_vue.js │ 70.8 KiB │
│                                                                                                                                                     js/resources_js_views_Dataflow_vue.js │ 72.3 KiB │
│                                                                                                                                            js/resources_js_views_InsightDataSource_vue.js │ 37.3 KiB │
│                                                                                                                                                      js/resources_js_views_Insight_vue.js │ 49.4 KiB │
│                                                                                                                                                     js/resources_js_views_Pipeline_vue.js │ 22.1 KiB │
│                                                                                                                                                  js/resources_js_views_PreviewData_vue.js │ 17.1 KiB │
│                                                                                                                                                   js/resources_js_views_SelectData_vue.js │ 36.9 KiB │
│                                                                                                                                                  js/resources_js_views_SelectModel_vue.js │ 16.8 KiB │
│                                                                                                                                                js/resources_js_views_UseConnection_vue.js │ 83.5 KiB │
│                                                                                                                                                          js/resources_js_views_dbt_vue.js │ 7.8 KiB  │
│                                                                                                                                                        js/resources_js_views_genAI_vue.js │ 7.88 KiB │
│                                                                                                                                                       js/resources_js_views_newapi_vue.js │ 7.92 KiB │
│                                                                                                                                js/resources_js_views_pipeline_configure_query_mode_vue.js │ 41.5 KiB │
│                                                                                                                                           js/resources_js_views_pipeline_configure_vue.js │ 70.7 KiB │
│                                                                                                                                           js/resources_js_views_pipeline_ingestion_vue.js │ 47.7 KiB │
│                                                                                                                                             js/resources_js_views_pipeline_sources_vue.js │ 22.1 KiB │
│                                                                                                                                                                          js/responsive.js │ 30.7 KiB │
│                                                                                                                                                                              js/tables.js │ 32 KiB   │
│                                                                                                                                                                                  js/ui.js │ 77.6 KiB │
└───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┴──────────┘
webpack compiled successfully
[Browsersync] Copy the following snippet into your website, just before the closing </body> tag
<script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.27.7'><\/script>".replace("HOST", location.hostname));
//]]></script>

[Browsersync] Access URLs:
 ----------------------------------
          UI: http://localhost:3001
 ----------------------------------
 UI External: http://localhost:3001
 ----------------------------------
[Browsersync] Watching files...

### Possible issues
1. If the system prompts: No application encryption key has been specified
  - Create a .env file, add a field called 'APP_KEY'
  - Go to the terminal and input 'php artisan key:generate', then the key will automatic generated to the 'APP_KEY' field
  - Restart the system

2. For the deployment
  1. If you are deploying the code you wrote, just run the .sync_platform.sh file.
  2. If you are deploying the code wrote by others:
    - using 'git pull' to pull the lastest code.
    - use 18 for nodejs version (nvm use 18)
    - complie fist by running the .start.sh file
    - run the .sync_platform.sh file to deploy to the server

3. For the DNS mapping
  - Finished configuring the nginx ip address
  - Configure the DNS file (/etc/hosts) for the server name
  - Restart 