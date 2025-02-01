No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.

## Plain command

```php
drush php-eval '
  // Import the necessary classes for working with nodes and handling entity storage exceptions
  use Drupal\node\Entity\Node;
  use Drupal\Core\Entity\EntityStorageException;

  // Define the list of specific node IDs that you want to update
  $node_ids_to_update = [123, 456, 789]; // Replace with the actual node IDs you want to change

  // Loop through each node ID to update it
  foreach ($node_ids_to_update as $nid) {
    try {
      // Load the node by its ID (nid)
      $node = Node::load($nid);

      // Check if the node exists and is of the correct type before attempting to update
      if ($node && $node->getType() == 'article') {  // Ensure it's the correct original node type
        // Set the new node type ('blog')
        $node->set('type', 'blog');
        
        // Save the updated node
        $node->save();
      }
    } catch (EntityStorageException $e) {
      // Log any errors that occur during the node saving process
      \Drupal::logger('my_module')->error($e->getMessage());
    }
  }
'
```

We can also put it in a Bash heredoc, but a plain PHP command here in a markdown file can be more readable or more colorful.
