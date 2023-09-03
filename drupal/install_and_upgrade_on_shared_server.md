## Setup Drupal

```shell
# Configure DNS records
# Configure database (say, with PHPMyAdmin)

cd WEB_APPLICATION_ROOT
composer create-project drupal/recommended-project WEB_APPLICATION_DIR_NAME
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush # If needed upgrade PHP version to the latest possible for the entire cPanel account and for this change to be visible in Terminal.
# Configure web_application_root (public_html/example.com/web, done from "domains" in Cpanel)
# Install Drupal from web browser
# Consider disabling RSS feeds for taxonomy pages and frontpage via disabling the relevant View (?)
```

### Known issues

If you get:

> The libmysqlclient driver version 3.1.21 is less than the minimum required version. Upgrade to libmysqlclient version 5.5.3 or up, or alternatively switch mysql drivers to MySQLnd version 5.0.9 or up.

change the PHP library from `libmysqlclient` to `MySQLnd` -- that is, enabling `nd_pdo_mysql` instead of `pdo_mysql`.

### Setup specific Drupal

```shell
composer create-project drupal/recommended-project:9.0.0 WEB_APPLICATION_DIR_NAME
cd WEB_APPLICATION_DIR_NAME
composer require drush/drush
composer update
vendor/bin/drush updatedb
```

## Setup a theme

```shell
composer require drupal/THEME_NAME
vendor/bin/drush theme:enable THEME_NAME
```

## Setup a module

```shell
composer require drupal/MODULE_NAME
vendor/bin/drush en MODULE_NAME
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
chmod u+w web/sites/default # Explanation below.
composer update # "drupal/core-*" --with-all-dependencies
vendor/bin/drush updatedb
vendor/bin/drush cache:rebuild
vendor/bin/drush status # Validate new version
```

### Could not delete default.settings.php

> Could not delete /public_html/example.com/web/sites/default/default.settings.php:

Drupal users often need to run `chmod u+w web/sites/default` before `composer update` because `composer update` comes after `composer require` in which Drupal hardens the `web/sites/default` permissions.

[More information here](https://drupal.stackexchange.com/questions/314209/when-does-system-requirements-function-runs).

### "Composer detected issues in your platform: Your Composer dependencies require a PHP version ">= x.x.x"

A problem common when hosting Drupal on shared hosting.

If, from `php -v` and from `composer -vvv about` the PHP version is higher then listed, then a resetting the PHP version to the highest version possible for an entire Cpanel (and probably also for a specific domain in Cpanel) is needed. Other action/s may be needed as well. The web hosting support staff should take care of this.

## Major upgrade

```shell
# Backup database
# Backup filetree

cd WEB_APPLICATION_DIR
# Do minor upgrade
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

## Upgrading an old Drupal manually

Small old Drupal websites (versions 1-7) of up to say 10 webpages are best upgraded manually by saving webpage copy (right mouse click >> Save as HTML named `1.html` up to `10.html` with the directories) and then pasting data from copies in a fresh Drupal.

## More information

* https://www.drupal.org/docs/upgrading-drupal/drupal-8-and-higher
* https://unix.stackexchange.com/questions/730301/understanding-the-composer-commands-for-upgrading-drupal-9-to-drupal-10

> While D10 is considered a "minor" update from D9 in terms of what actually changed (remaining APIs mostly the same), it's still a major version bump. `composer update` only does minor and patch version bumps. Any major version bumps need `composer require`. Following semver guidelines, **API removal** counts towards a major version bump because that's a potentially breaking change.
