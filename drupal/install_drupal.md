Because installing a composer-driven drupal project with a local Drush was the original aim of this program, I append the following:

    composer create-project drupal-composer/drupal-project "$war"/"$domain"
    cp "$drt/$domain"/wp-config-sample.php "$war/$domain"/wp-config.php
    drush --root="$war" --uri="$domain" pm install redirect token metatag draggableviews
    drush --root="$war" --uri="$domain" en language content_translation redirect token metatag draggableviews

Install automatic updates module:

    # composer require 'drupal/automatic_updates:^2.0
