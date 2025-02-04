No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.

## Command

```php
drush php-eval '
use Drupal\node\Entity\Node;
use Drupal\Core\Entity\EntityStorageException;

$node_ids_to_update = [NID_COMES_HERE];

foreach ($node_ids_to_update as $nid) {
    try {
    $node = Node::load($nid);
    
    if ($node && $node->getType() == 'EXISTING_NODE_TYPE_COMES_HERE') {
        $node->set('type', 'NEW_NODE_TYPE_COMES_HERE');
        $node->save();
    }
    
    } catch (EntityStorageException $e) {
    \Drupal::logger('my_module')->error($e->getMessage());
    }
}
'
```

## Notes

* We can also put it all in a Bash heredoc, but a plain PHP command here in a markdown file can be more readable or more colorful.
* We can use the general `\Drupal\Core\Entity\EntityException` or the more specific `Drupal\Core\Entity\EntityStorageException` (we should ensure to change in both places).
* The Drupal logger channel name `my_module` doesn't necessarily reflect a custom module; it's just a placeholder string that could be changed to any other placeholder string such as `my_custom_log_channel`.
