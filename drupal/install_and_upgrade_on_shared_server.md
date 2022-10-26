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

## Setup themes

```shell
composer require drupal/THEME_NAME
vendor/bin/drush theme:enable THEME_NAME
```

## Setup modules

```shell
composer require drupal/simple_sitemap
composer require drupal/redirect
composer require drupal/simplemeta
composer require drupal/asset_injector

composer require drupal/mailsystem
composer require drupal/sendgrid_integration

vendor/bin/drush en simple_sitemap
vendor/bin/drush en redirect
vendor/bin/drush en simplemeta
vendor/bin/drush en asset_injector

vendor/bin/drush en mailsystem
vendor/bin/drush en sendgrid_integration
```

## Unsetup a theme

```shell
vendor/bin/drush theme:uninstall THEME_NAME
composer remove drupal/THEME_NAME
```

## Unsetup a module

```shell
vendor/bin/drush un MODULE_NAME
composer remove drupal/MODULE_NAME
```

## Minor upgrade

```shell
cd WEB_APPLICATION_DIR_NAME
composer update # "drupal/core-*" --with-all-dependencies
vendor/bin/drush updatedb
vendor/bin/drush cache:rebuild
```

## Major upgrade

https://www.drupal.org/docs/upgrading-drupal/drupal-8-and-higher
