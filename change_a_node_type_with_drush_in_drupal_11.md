Although an array, one at a time is the best scenario.

## Command

```php
drush php-eval '
use Drupal\node\Entity\Node;
use Drupal\Core\Entity\EntityStorageException;

$node_id_to_update = [NID_COMES_HERE];
$node_id_to_update = array_values(array_filter($node_id_to_update, 'is_numeric'));

if (count($node_id_to_update) === 1) {
    $nid = $node_id_to_update[0];
    
    try {
        $node = Node::load($nid);

        if ($node && $node->getType() == 'EXISTING_NODE_TYPE_COMES_HERE') {
            $node->set('type', 'NEW_NODE_TYPE_COMES_HERE');
            $node->save();
        }

    } catch (EntityStorageException $e) {
        \Drupal::logger('my_module')->error($e->getMessage());
    }
} else {
    \Drupal::logger("my_module")->error("Array should contain exactly one numeric node ID.");
}
'
```

## Notes

* No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.
* We can also put it all in a Bash heredoc, but a plain PHP command here in a markdown file can be more readable or more colorful.
* We can use the general `\Drupal\Core\Entity\EntityException` or the more specific `Drupal\Core\Entity\EntityStorageException` (we should ensure to change in both places).
* The Drupal logger channel name `my_module` doesn't necessarily reflect a custom module; it's just a placeholder string that could be changed to any other placeholder string such as `my_custom_log_channel`.
