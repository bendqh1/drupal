Disable caching for some time and then flush all caches

```shell
drush ev "
\$state = Drupal::state();
\$state->set('system.performance.disable_cache', TRUE);
\$state->set('system.performance.cache_disable_expire', time() + 300);
"
drush cr
```

It may be simpler to do the following pseudocode:

```
Pause cache
flush all caches
Unpause cache
```
