## Install

```shell
# Configure DNS records
# Configure database (say, with PHPMyAdmin)

cd WEB_APPLICATION_ROOT
composer create-project drupal/recommended-project WEB_APPLICATION_DIR_NAME
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush
vendor/bin/drush site:install

# Configure Drupal settings.php
# Install Drupal from web browser
```

## Upgrade

```shell
cd WEB_APPLICATION_DIR_NAME
composer update # "drupal/core-*" --with-all-dependencies
drush updatedb
drush cache:rebuild
```
