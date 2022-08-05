On LAMP do:

```shell
cd WEB_APPLICATION_ROOT
composer create-project drupal/recommended-project WEB_APPLICATION_DIR_NAME
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush
# Configure database (say, with PHPMyAdmin)
# Configure Drupal settings.php
# Configure DNS records
# Install Drupal from web browser
```

Later:

```shell
cd WEB_APPLICATION_DIR_NAME
composer update "drupal/core-*" --with-all-dependencies
drush updatedb
drush cache:rebuild
```
