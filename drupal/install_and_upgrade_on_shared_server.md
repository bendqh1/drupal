## Setup Drupal

```shell
# Configure DNS records
# Configure database (say, with PHPMyAdmin)

cd WEB_APPLICATION_ROOT_DIR
composer create-project drupal/recommended-project WEB_APPLICATION_DIR
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush
vendor/bin/drush site:install

# Configure web_application_root (example.com/web, done from "domains" in Cpanel)
# Install Drupal from web browser
# Consider disabling RSS feeds for taxonomy pages and frontpage
```

## Flush all caches

```shell
vendor/bin/drush un
```

## Setup themes

```shell
composer require drupal/THEME_NAME
vendor/bin/drush theme:enable THEME_NAME
```

## Setup modules

```shell
composer require drupal/redirect
composer require drupal/asset_injector
composer require drupal/sendgrid_integration

vendor/bin/drush en redirect
vendor/bin/drush en asset_injector
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

## Could not delete default.settings.php

> Could not delete /home/hanekudai/public_html/benaharoni.com/web/sites/default/default.settings.php:

Drupal users often need to run `chmod u+w web/sites/default` before `composer update` because `composer update` comes after `composer require` in which Drupal hardens the `web/sites/default` permissions.

## Major upgrade

```shell
# Backup database
# Backup filetree
cd WEB_APPLICATION_DIR
composer update
chmod 777 web/sites/default
chmod 666 web/sites/default/*settings.php
chmod 666 web/sites/default/*services.yml
composer require 'drupal/core-recommended:^10' 'drupal/core-composer-scaffold:^10' 'drupal/core-project-message:^10' --update-with-dependencies --no-update
composer update
drush updatedb
chmod 755 web/sites/default
chmod 644 web/sites/default/*settings.php
chmod 644 web/sites/default/*services.yml
```

## Major upgrade

* https://www.drupal.org/docs/upgrading-drupal/drupal-8-and-higher
* https://unix.stackexchange.com/questions/730301/understanding-the-composer-commands-for-upgrading-drupal-9-to-drupal-10

> While D10 is considered a "minor" update from D9 in terms of what actually changed (e.g. introduced a few features, deprecated old APIs, remaining APIs mostly the same), it's still a major version bump (first digit change) if you're looking at it from a dependency management view (9.x.x -> 10.x.x). `composer update` only does minor and patch version bumps. Any major version bumps need `composer require`. Following semver guidelines, API removal counts towards a major version bump because that's a potentially breaking change.
