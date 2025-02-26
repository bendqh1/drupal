## Add Drush alias from PATH environment variable

To prevent executing vendor/bin/drush all the time do:

Add to `"$HOME"/.bashrc`:

```shell
PATH=$PATH:./vendor/bin
```

`source "$HOME/.bashrc"`.

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

### Setup a specific Drupal

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

## Unsetup a theme

```shell
# minor upgrade
drush theme:uninstall THEME_NAME
composer remove drupal/THEME_NAME
```

## Unsetup a module

```shell
# minor upgrade
drush un MODULE_NAME
composer remove drupal/MODULE_NAME
```

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

## Installing a non stable and non beta version of a module

One can install a dev version in case of no other option (and no desire to patch an old stable or beta release).

We can go to `drupal.org/project/MODULE_NAME_COMES_HERE/releases` and get such releases.
