## Watchdog

In the SQL watchdog table I only see a few **"Page not found"** errors without further detailing.

`vendor/bin/drush watchdog:show`

```
------- -------------- ---------------- ---------- -------------------------------------------------------------------------------------------
  ID      Date           Type             Severity   Message
 ------- -------------- ---------------- ---------- -------------------------------------------------------------------------------------------
  85934   16/Dec 17:21   php              error      Twig\Error\SyntaxError: Unknown "endif" tag. in Twig\Parser->subparse() (line 37 of
                                                     /home/USERNAME/WEB_APPLICATION_ROOT/example.com/web/themes/contrib/basic/templates/layout/html.html.twig).
```

The theme I made the Context reaction about is named Basic, so this is probably related.
