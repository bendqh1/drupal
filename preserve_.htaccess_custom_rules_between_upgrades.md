Place your custom `.htaccess` in a directory **above Drupal’s root** (e.g., `$HOME/.htaccess`). Apache applies `.htaccess` files from the root down, so your rules will always apply before Drupal’s `.htaccess` is processed. This way, Drupal updates never touch your custom `.htaccess`.

Place the .htaccess at `$HOME/.htaccess.` It doesn't matter how many tiers up, as long as it's above `$HOME/public_html/example.com`. Apache processes .htaccess files from higher directories first.

Placing the .htaccess at `$HOME/public_html/.htaccess` could work, but it risks being overwritten or ignored if Drupal's root is directly in `$HOME/public_html` or if another application in that directory has its own .htaccess.<br>
Placing it at `$HOME/.htaccess` is safer because it’s higher up, outside any application’s root, ensuring Apache processes it first and Drupal updates won’t affect it.
