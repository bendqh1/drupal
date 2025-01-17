Preperations

* Backup database
* Backup filetree
* Do minor upgrade

Permissions

```shell
chmod 777 web/sites/default
chmod 666 web/sites/default/*settings.php
chmod 666 web/sites/default/*services.yml
```

## Preview `require` changes and make them if there are no errors

```shell
composer require 'drupal/core-recommended:^11' 'drupal/core-composer-scaffold:^11' 'drupal/core-project-message:^11' -with-all-dependencies --dry-run
# If there are no problems in the --dry-run:
composer require 'drupal/core-recommended:^11' 'drupal/core-composer-scaffold:^11' 'drupal/core-project-message:^11' -with-all-dependencies
```

## Preview `upgrade` changes and make them if there are no errors

```shell
composer update --dry-run ## dry-run means preview so if there are no errors, proceed.
composer install
drush updatedb:status
drush updatedb
drush cache:rebuild
```

## Shell

```shell
chmod 755 web/sites/default
chmod 644 web/sites/default/*settings.php
chmod 644 web/sites/default/*services.yml
```
