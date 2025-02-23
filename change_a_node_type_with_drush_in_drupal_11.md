I convert node types of various nodes to the node type `does_not_appear_in_views`.

## Command

```php
drush php-eval "

use Drupal\node\Entity\Node;
use Drupal\Core\Logger\LoggerChannelInterface;

$nid = NID_COMES_HERE;

if (!empty($nid) && is_numeric($nid) && $nid > 0) {
    try {
        $node = Node::load($nid);

        if ($node) {
                $node->set('type', 'does_not_appear_in_views');
                $node->save();
        } else {
            \Drupal::logger('my_change_node_type_module')
                ->error('Node not found for ID: @nid', ['@nid' => $nid]);
        }

    } catch (\Exception $e) {
        \Drupal::logger('my_change_node_type_module')
            ->error('Error loading node with ID @nid: @message', ['@nid' => $nid, '@message' => $e->getMessage()]);
    }
}

"
```

## Notes

1. Drush php-eval strings must be quoted with double quotes.
2. No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.
1. We can also put it all in a Bash heredoc, but a plain PHP command here in a markdown file can be more readable or more colorful.
1. We can use the general `\Drupal\Core\Entity\EntityException` or the more specific `Drupal\Core\Entity\EntityStorageException` (we should ensure to change in both places).
1. The Drupal logger channel name `my_module` doesn't necessarily reflect a custom module; it's just a placeholder string that could be changed to any other placeholder string such as `my_custom_log_channel`.
1. [If using `exit;` statements](https://codereview.stackexchange.com/questions/295280/replace-node-type-in-drupal) then each `exit;` statement in this code is used to stop the script execution under specific error conditions: invalid node ID, missing node, or a mismatch in node type. This helps prevent unwanted actions, such as modifying a non-existent or mismatched node.
1. When you change the node type using the code, Drupal automatically handles the necessary updates in the related database tables (e.g., node, node_revision, and node_field_data) upon saving the node.<br>
Direct database changes would require you to update those tables manually, but with Drupal's API, it takes care of this for you behind the scenes.
