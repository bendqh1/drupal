```shell
# Backup database
# Backup filetree
# Do minor upgrade

chmod 777 web/sites/default
chmod 666 web/sites/default/*settings.php
chmod 666 web/sites/default/*services.yml
composer require 'drupal/core-recommended:^11' 'drupal/core-composer-scaffold:^11' 'drupal/core-project-message:^11' --update-with-dependencies --no-update
composer require 'drush/drush:^13' --no-update
composer update --dry-run
composer update "drupal/core-*" drush/drush --with-all-dependencies --dry-run
composer install
drush updatedb:status
drush updatedb
drush cache:rebuild
chmod 755 web/sites/default
chmod 644 web/sites/default/*settings.php
chmod 644 web/sites/default/*services.yml
```
