Add to `"$HOME"/.bashrc`.

```shell
drupal_upgrade() {
	echo -e "\033[43m\033[30m If you haven't already, then go to the website directory and run this. \033[0m"

	composer remove drush/drush
	chmod u+w web/sites/default
	composer update
	chmod u-w web/sites/default
	composer require drush/drush
	drush updatedb
	drush cache:rebuild

	drush cache:rebuild
	composer show drupal/core --latest | grep 'latest'
	drush status # Validate current Drupal version
	chmod u+w web/sites/default
	composer update
	drush updatedb
	chmod u-w web/sites/default
	drush status # Validate new Drupal version
	drush cache:rebuild
}

export -f drupal_upgrade
```

Run:

```shell
source "$HOME"/.bashrc 2>/dev/null
```

### Minor upgrade error handling

#### Drupal isn't upgraded to the last Drupal core version (but to an earlier version)

This error shouldn't happen if Drush is removed and re-required but if it happens:

```
composer why-not drupal/core LATEST_DRUPAL_CORE_VERSION
```

Check for conflicts and instructions.

#### Could not delete default.settings.php

> Could not delete /public_html/example.com/web/sites/default/default.settings.php:

Drupal users often need to run `chmod u+w web/sites/default` before `composer update` because `composer update` comes after `composer require` in which Drupal hardens the `web/sites/default` permissions.

[More information here](https://drupal.stackexchange.com/questions/314209/when-does-system-requirements-function-runs).

#### "Composer detected issues in your platform: Your Composer dependencies require a PHP version ">= x.x.x"

A problem common when hosting Drupal on shared hosting.

If, from `php -v` and from `composer -vvv about` the PHP version is higher then listed, then a resetting the PHP version to the highest version possible for an entire Cpanel (and probably also for a specific domain in Cpanel) is needed. Other action/s may be needed as well. The web hosting support staff should take care of this.
