## General process

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

## In case of mismatches

If you encounter various mismatches when upgrading Drupal you may want to consider restarting your composer.json and composer.lock files:

```shell
cd $web_application_dir
cp composer.lock composer.lock.bak
rm composer.lock
rm -rf vendor
composer install
compser update
```

In the new composer.json file, delete `"drupal/classy": "^1.0"`.

If you tackle any deprecation notices with Yellow background, it is somewhat likely that the reason is a PHP version which is too new (try to downgrade PHP).

### Mismatch between Composer PHP version and Web Server PHP version

If, files like phpinfo.php with `<?php phpinfo(); ?>` or phpversion.php with `<?php echo 'PHP Version: ' . phpversion(); ?>` can't run and the original error is given, which means that there is probably some mismtach  due to the nature of shared hosting platforms.
