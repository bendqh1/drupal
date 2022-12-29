Drupal users often need to run chmod u+w web/sites/default before composer update.

composer update comes after composer require in which Drupal hardens the web/sites/default permissions.

How come Drupal hardens file permissions?

How can this be, Linuxwise, that a program (the Drupal content management system for that matter) changes file permissions instead of a human user?
