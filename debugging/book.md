## Apache logs and PHP logs

Try:

```shell
cat /var/log/apache2/error_log
cat /usr/local/apache/logs/error_log
php --info | grep error
drush watchdog:show
```

`drush watchdog:show` may show:

```
------- -------------- ---------------- ---------- -------------------------------------------------------------------------------------------
  ID      Date           Type             Severity   Message
 ------- -------------- ---------------- ---------- -------------------------------------------------------------------------------------------
  85934   16/Dec 17:21   php              error      Twig\Error\SyntaxError: Unknown "endif" tag. in Twig\Parser->subparse() (line 37 of
                                                     /home/USERNAME/WEB_APPLICATION_ROOT/example.com/web/themes/contrib/basic/templates/layout/html.html.twig).
```

The theme I made the Context condition-reaction about is named Basic, so this is probably related.

### `watchdog` SQL table

If you think that's not enough consider exporting the `watchdog` SQL table and check it's contents carefully.

## Links

* [How to see the error messages when I get the white screen of death?](https://drupal.stackexchange.com/q/7560/112844)
* [How to debug Drupal especially when no webserver logs and PHP logs are available?](https://drupal.stackexchange.com/q/317940/112844)
