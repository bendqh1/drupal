# Flush all caches and disable cache for some time

## Question
In Drupal 11.1.5 the command `drush cr` flushes all caches.

And yet, I wish to not only flush all caches but also disable cache formation for the next five minutes as well.

How to do that?

Short answer.

## Answer

```shell
drush ev "
\$state = Drupal::state();
\$state->set('system.performance.disable_cache', TRUE);
\$state->set('system.performance.cache_disable_expire', time() + 300);
"
drush cr
```
