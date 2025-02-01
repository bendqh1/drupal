No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.

## Plain command

```php
drush php-eval '
  use Drupal\node\Entity\Node;
  use Drupal\Core\Entity\EntityStorageException; # Use the standard exception handler;

  $node_ids_to_update = [NID_COMES_HERE]; // Multiple NIDs should be separated by at least one comma.

  // Loop through each node ID to update it
  foreach ($node_ids_to_update as $nid) {
    try {
      $node = Node::load($nid);

      if ($node && $node->getType() == 'article') {
        $node->set('type', 'NEW_NODE_TYPE_COMES_HERE');
        $node->save();
      }

    } catch (EntityStorageException $e) {
      \Drupal::logger('my_module')->error($e->getMessage());
    }
  }
'
```

We can also put it in a Bash heredoc, but a plain PHP command here in a markdown file can be more readable or more colorful.
