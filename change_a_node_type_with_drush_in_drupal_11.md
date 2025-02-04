No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.

## Discussion

### Question

In Drupal **11** or greater, I want to change a node type with Drush `php-eval` command.

This may be a way to do so:

```
drush php-eval '$node = \Drupal\node\Entity\Node::load(1); $node->setType("new_content_type")->save();'
```

Firstly, is it a correct way and secondly if it is indeed correct, how then would you improve it by means of error prevention and handling.

### Answer

The approach you're suggesting to change a node's content type in Drupal 11 using drush php-eval is mostly correct, but it could benefit from improvements for error prevention and handling.

The rest of the answer is inaplicable.

## Command

```php
drush php-eval '
use Drupal\node\Entity\Node;
use Drupal\Core\Entity\EntityStorageException; # Use the standard exception handler;

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
* Instead of `Drupal\Core\Entity\EntityStorageException`, you may want the more general `\Drupal\Core\Entity\EntityException` (ensure to change in both places).
* * The Drupal logger channel name `my_module` doesn't necessarily reflect a custom module; it's just a placeholder string that could be changed to any other placeholder string such as `my_custom_log_channel`.
