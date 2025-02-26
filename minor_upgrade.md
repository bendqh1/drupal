Add to `"$HOME"/.bashrc`.

```shell
drupal_upgrade() {
	echo -e "\033[43m\033[30m If you haven't already, then go to the website directory and run this. \033[0m"

	drush cache:rebuild

	composer show drupal/core --latest | grep 'latest'
	drush status # Validate current Drupal version

	chmod u+w web/sites/default

	composer require drush/drush
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

## Upgrading an old Drupal manually

Small old Drupal websites (versions 1-7) of up to say 10 webpages are best upgraded manually by saving webpage copy (right mouse click >> Save as HTML named `1.html` up to say `10.html` with the directories) and then pasting data from copies in a fresh Drupal.

## Notes

### 1) ChatGPT question about upgrade without version jump

Even though my Drupal is 11.1.3 I have tried to upgrade but the latest version is still 11.1.3 but for some reason, still, some new packages were installed:

```
Loading composer repositories with package information
Updating dependencies
Lock file operations: 0 installs, 5 updates, 0 removals
  - Upgrading composer/composer (2.8.5 => 2.8.6)
  - Upgrading illuminate/collections (v11.43.2 => v11.44.0)
  - Upgrading illuminate/conditionable (v11.43.2 => v11.44.0)
  - Upgrading illuminate/contracts (v11.43.2 => v11.44.0)
  - Upgrading illuminate/macroable (v11.43.2 => v11.44.0)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 0 installs, 5 updates, 0 removals
  - Downloading composer/composer (2.8.6)
  - Upgrading composer/composer (2.8.5 => 2.8.6): Extracting archive
  - Upgrading illuminate/macroable (v11.43.2 => v11.44.0): Extracting archive
  - Upgrading illuminate/contracts (v11.43.2 => v11.44.0): Extracting archive
  - Upgrading illuminate/conditionable (v11.43.2 => v11.44.0): Extracting archive
  - Upgrading illuminate/collections (v11.43.2 => v11.44.0): Extracting archive
Generating autoload files
91 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
phpstan/extension-installer: Extensions installed
> composer/composer: installed
> composer/pcre: installed
> mglaman/phpstan-drupal: installed
> phpstan/phpstan-deprecation-rules: installed
> phpstan/phpstan-phpunit: installed
No security vulnerability advisories found.
```

How do you explain it? Short answer.

> Even though your Drupal version hasn't changed (still 11.1.3), some dependencies, such as the composer/composer package and several illuminate libraries, were updated as part of the upgrade process. These updates are part of the broader dependency management in your project, which can involve updates to packages that aren't directly tied to Drupal itself but are still part of the environment or underlying infrastructure.
