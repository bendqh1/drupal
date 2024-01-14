## Context condition by role with reaction by theme causes website to partially crash

As indicated by `vendor/bin/drush watchdog:show` the problem was in a twig file of the Basic theme because when I have changed in `/themes/contrib/basic/templates/layout/html.html.twig` from this:

```twig
<!DOCTYPE html>
  <html{{ html_attributes }}>
{% endif %}
```

to that:

```twig
<!DOCTYPE html>
  <html{{ html_attributes }}>
```

I could then finally use my website as an admin and with Basic theme as a non-administrative theme unique to me as an admin.<br>
I then went to `/admin/structure/context` and manually removed the particular condition-reaction discussed here.
