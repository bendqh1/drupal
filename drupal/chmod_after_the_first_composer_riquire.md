Drupal users often need to run `chmod u+w web/sites/default` before `composer update`.

composer update comes after composer require in which Drupal hardens the web/sites/default permissions.
