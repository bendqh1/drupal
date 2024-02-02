Add this to `"$HOME"/.bashrc`.

```shell
export -f drupal_upgrade

drupal_upgrade() {
    chmod u+w web/sites/default
    composer update
    vendor/bin/drush updatedb
    vendor/bin/drush cache:rebuild
    chmod u-w web/sites/default
    vendor/bin/drush status
}
```

Run:

```shell
source "$HOME"/.bashrc 2>/dev/null
```
