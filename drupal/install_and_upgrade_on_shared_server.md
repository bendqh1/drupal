## Add Drush alias from PATH environment variable

Add to `"$HOME"/.bashrc`

```shell
PATH=$PATH:./vendor/bin
```

source `"$HOME/.bashrc"`.

## Setup Drupal

```shell
# Configure DNS records
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
drush updatedb
```

## Setup a theme

```shell
composer update
drush updatedb
composer require drupal/THEME_NAME
drush theme:enable THEME_NAME
```

## Setup a module

```shell
composer update
drush updatedb
composer require drupal/MODULE_NAME
drush en MODULE_NAME
```

### Setup the module layout_builder_modal

```shell
composer require 'drupal/layout_builder_modal:^1.2'
drush en layout_builder_modal
```

### Setup the module Context

Use a command like this (check for updates in https://www.drupal.org/project/context):

```shell
composer require 'drupal/context:^5.0@RC'
drush en context
drush en context_ui
```

## Unsetup a theme

```shell
composer update
drush updatedb
drush theme:uninstall THEME_NAME
composer remove drupal/THEME_NAME
```

## Unsetup a module

```shell
composer update
drush updatedb
drush un MODULE_NAME
composer remove drupal/MODULE_NAME
```

### Unsetup the module layout_builder_modal

```shell
drush un layout_builder_modal
composer remove 'drupal/layout_builder_modal:^1.2'
```

### Unsetup the module Context

Use a command like this (check for updates in https://www.drupal.org/project/context):

```shell
drush un context_ui
drush un context
composer remove 'drupal/context:^5.0@RC'
```

## Minor upgrade

Add to `"$HOME"/.bashrc`.

```shell
export -f drupal_upgrade

drupal_upgrade() {
	composer show drupal/core --latest | grep 'latest'
	drush status # Validate current Drupal version
	chmod u+w web/sites/default
	composer update
	drush updatedb
	drush cache:rebuild
	chmod u-w web/sites/default
	drush status # Validate new Drupal version
}
```

Run:

```shell
source "$HOME"/.bashrc 2>/dev/null
```

### Drupal isn't upgraded to the last Drupal core version (but to an earlier version)

```composer why-not drupal/core LATEST_DRUPAL_CORE_VERSION```

Check for conflicts and instructions.

If Drush is too old:

```shell
composer remove drush/drush
chmod u+w web/sites/default
composer update
chmod u-w web/sites/default
composer require drush/drush
drush updatedb
drush cache:rebuild
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
drush cache:rebuild
chmod 755 web/sites/default
chmod 644 web/sites/default/*settings.php
chmod 644 web/sites/default/*services.yml
```

## Upgrading an old Drupal manually

Small old Drupal websites (versions 1-7) of up to say 10 webpages are best upgraded manually by saving webpage copy (right mouse click >> Save as HTML named `1.html` up to say `10.html` with the directories) and then pasting data from copies in a fresh Drupal.

## Fix Trusted Hosts error

### Phase 1

```shell
chmod 777 web/sites/default
chmod 666 web/sites/default/*settings.php
```

### Phase 2

Add the following in the end of `/sites/default/settings.php`.

Note the two commas instead a comma and a semicolon and change `example` to the domain name you use. 

```php
$settings['trusted_host_patterns'] = array(
  '^example\.com$',
  '^www\.example\.com$',
);
```

### Phase 3

```shell
chmod 755 web/sites/default
chmod 644 web/sites/default/*settings.php
```

### Further reading

* https://drupal.stackexchange.com/questions/145286/what-does-the-provided-host-name-is-not-valid-for-this-server-mean

## Fix REPEATABLE-READ warning

### Phase 1

```shell
chmod 777 web/sites/default
chmod 666 web/sites/default/*settings.php
```

### Phase 2

```php
'init_commands' => [
	'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
];
```

### Phase 3

```shell
chmod 755 web/sites/default
chmod 644 web/sites/default/*settings.php
```

## More information

* https://www.drupal.org/docs/upgrading-drupal/drupal-8-and-higher
* https://unix.stackexchange.com/questions/730301/understanding-the-composer-commands-for-upgrading-drupal-9-to-drupal-10

> While D10 is considered a "minor" update from D9 in terms of what actually changed (remaining APIs mostly the same), it's still a major version bump. `composer update` only does minor and patch version bumps. Any major version bumps need `composer require`. Following semver guidelines, **API removal** counts towards a major version bump because that's a potentially breaking change.
