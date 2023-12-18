## Apache logs and PHP logs

If possible (in cases of shared hosting this may not be possible at least without opening a support ticket), try:

* `cat /var/log/apache2/error_log` or `cat /usr/local/apache/logs/error_log`
* `php --info | grep error`

## Watchdog

* `vendor/bin/drush watchdog:show` may output something like this:

```
------- -------------- ---------------- ---------- -------------------------------------------------------------------------------------------
  ID      Date           Type             Severity   Message
 ------- -------------- ---------------- ---------- -------------------------------------------------------------------------------------------
  85934   16/Dec 17:21   php              error      Twig\Error\SyntaxError: Unknown "endif" tag. in Twig\Parser->subparse() (line 37 of
                                                     /home/USERNAME/WEB_APPLICATION_ROOT/example.com/web/themes/contrib/basic/templates/layout/html.html.twig).
```

The theme I made the Context reaction about is named Basic, so this is probably related.

### `watchdog` SQL table

If you think that's not enough consider exporting the `watchdog` SQL table and check it's contents carefully.

## Links

* [How to see the error messages when I get the white screen of death?](https://drupal.stackexchange.com/q/7560/112844)
* [How to debug Drupal especially when no webserver logs and PHP logs are available?](https://drupal.stackexchange.com/q/317940/112844)
