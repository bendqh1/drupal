## Setup Drupal

```shell
# Configure DNS records
# Configure database (say, with PHPMyAdmin)

cd WEB_APPLICATION_ROOT
composer create-project drupal/recommended-project WEB_APPLICATION_DIR_NAME
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush
vendor/bin/drush site:install

# Configure web_application_root (example.com/web, done from "domains" in Cpanel)
# Configure Drupal settings.php
# Install Drupal from web browser
```

## Setup modules

```shell
composer require drupal/simple_sitemap
composer require drupal/redirect
composer require drupal/metatag
composer require drupal/webform
composer require drupal/asset_injector
composer require drupal/gutenberg
composer require drupal/context

vendor/bin/drush en simple_sitemap
vendor/bin/drush en redirect
vendor/bin/drush en metatag
vendor/bin/drush en webform
vendor/bin/drush en asset_injector
vendor/bin/drush en gutenberg
```

## unsetup a module

```shell
vendor/bin/drush un MODULE_NAME
composer remove vendor/MODULE_NAME

composer require drupal/basic
vendor/bin/drush theme:enable basic
# vendor/bin/drush theme:uninstall basic
```

## Upgrade

```shell
cd WEB_APPLICATION_DIR_NAME
composer update # "drupal/core-*" --with-all-dependencies
vendor/bin/drush updatedb
vendor/bin/drush cache:rebuild
```
