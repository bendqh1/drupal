Create the file `cntfn.php` (Change Node Type For a Node) with the following code and run it with `drush php-script cntfn.php`

## Command

```php
<?php

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

?>
```

## Notes

1. `drush php-eval "CODE"` doesn't fit here because it only supports single-line codes.
    * Drush php-eval strings must be quoted with double quotes.
    * No PHP opener and PHP closer are needed when running `drush php-eval` commands because drush assumes PHP anyway.
1. `\Drupal\Core\Entity\EntityException` is more general than `Drupal\Core\Entity\EntityStorageException`.
1. The Drupal logger channel name `my_module` doesn't necessarily reflect a custom module; it's just a placeholder string that could be changed to any other placeholder string such as `my_custom_log_channel`.
1. [If using `exit;` statements](https://codereview.stackexchange.com/questions/295280/replace-node-type-in-drupal) then each such statement stops the script execution under specific error conditions: invalid node ID, missing node, or a mismatch in node type. This helps prevent unwanted actions, such as modifying a non-existent or mismatched node.

## Problem

Some assume that when changing a node's node type with the Drupal API, Drupal will automatically handle the necessary updates in the related database tables (e.g., `node`, `node_revision`, `node_field_data`, and anything else eeded) when saving the node, but it's not necessarily the case.
