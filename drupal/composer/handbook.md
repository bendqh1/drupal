To test if you have Composer just type `composer` in terminal.

## Drupal installation

A typical Drupal project directory has two sub directories, `/web` and `/vendor`.

This means that the root of the project created with the Composer template is one level above the webroot.

A `/web` directory includes a Drupal website.

When Drush is installed with composer as part of a Drupal composer.json, then drush is installed in the vendor directory of that Drupal installation and upgrading drush is separate from upgrading drupal
