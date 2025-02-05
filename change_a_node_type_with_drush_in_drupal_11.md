Although an array, one at a time is the best scenario.

## Command

```php
drush php-eval '

use Drupal\node\Entity\Node;
use Drupal\Core\Logger\LoggerChannelInterface;

$nid = NID_COMES_HERE;

if (!empty($nid) && is_numeric($nid)) {
    try {
        $node = Node::load($nid);

        if ($node) {
            if ($node->getType() == 'EXISTING_NODE_TYPE_COMES_HERE') {
                $node->set('type', 'NEW_NODE_TYPE_COMES_HERE');
                $node->save();
            } else {
                \Drupal::logger('change_node_type_with_drush')->error('Node type mismatch for node ID: @nid', ['@nid' => $nid]);
            }
        } else {
            \Drupal::logger('change_node_type_with_drush')->error('Node not found for ID: @nid', ['@nid' => $nid]);
        }

    } catch (\Exception $e) {
        \Drupal::logger('change_node_type_with_drush')->error('Error loading node with ID @nid: @message', ['@nid' => $nid, '@message' => $e->getMessage()]);
    }
}

'
```

## Notes

* No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.
* We can also put it all in a Bash heredoc, but a plain PHP command here in a markdown file can be more readable or more colorful.
* We can use the general `\Drupal\Core\Entity\EntityException` or the more specific `Drupal\Core\Entity\EntityStorageException` (we should ensure to change in both places).
* The Drupal logger channel name `my_module` doesn't necessarily reflect a custom module; it's just a placeholder string that could be changed to any other placeholder string such as `my_custom_log_channel`.
