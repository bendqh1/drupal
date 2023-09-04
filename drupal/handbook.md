## Set default text format

```shell
/admin/config/content/formats
```

## Reset a user password with Drush

```shell
vendor/bin/drush user:password USERNAME "SOMEPASSWORD"
```

## In case there are no minimal URLs

Login as `?example.com/q=user`

## Flush all caches

```shell
vendor/bin/drush cache-rebuild
```

## Common modules

* Redirect
* sendgrid_integration

## Redirect module

* Deleting it caused me to lose about 15 **alias-to-alias** redirects.
* I have also noticed that now after deletion, if I visit `/node/1` and click a link in it to `/node/2`, the URL of `/node/2` is `/node/2` instead of its alias `/node/my-second-node`.<br>
This is not to be confused with route normalization which is redirecting to the canonical URL of any page. That includes redirecting to an alias if existing, removing trailing slashes, ensure the language prefix is set and similar clean-up.

## Asset injector

https://www.drupal.org/project/asset_injector/issues/3314720

## Hide a Drupal homepage heading

**Structure > Blocks > Content Above > 	כותרת דף > Settings > Pages > Hide for the listed pages > /node/1**

## Avoid clearing cache after each CSS and/or JS change

As long as you don't have JS or CSS aggregation turned on, you shouldn't have to clear cache to see your changes to existing files.

## jQuery UI

If jQuery modules are deleted by mistake install them.

```shell
jquery_ui
jquery_ui_draggable
jquery_ui_droppable
```

Then update database and flush all caches.

## Add a automatically updated `current year` to the bottomost part of a Drupal website

One way is creating a block with this content.

```html
<p style="text-align: center;"><script>document.write( new Date().getFullYear() );</script></p>
```

SEOwise this approach is wrong because not necessarily any search engine crawler will wait for JavaScript scripts to track down structure and content created with JavaScript.

### Sub-theme

Let's say that the theme is a sub-theme of Olivero.

Copy `/core/themes/olivero/templates/layout/region--footer-bottom.html.twig` to `/themes/subtheme/templates/region--footer-bottom.html.twig` and then add **in the end of it** the following code:

```
<p style="text-align: center;">{{ 'now' | date('Y') }}</p>
```

© כל הזכויות שמורות - X. אין להעתיק תוכן ללא אישור מפורש מבעל האתר.


## Misc

Drupal uncustomized core 9.5.3 upgraded to 9.5.9 (first version was probably 9.4.5).

I thought that a node has a taxonomy term but the taxonomy-term-webpage doesn't mention this node.<br>
I believed that this problem is part of a broader problem in which taxonomy-term-webpages don't have h1 headings.

I was wrong.<br>
the taxonomy-term-page did mentioned this node.<br>
I didn't notice that due to it having only one value, the value text was very generic and short `תכנים אחרונים` and no link styling was directly apparent.

### Chapters in articles

* הערות כלליות (עם ul)
* הערות ספציפיות (עם ol)
* לקריאה נוספת
* קישורים חיצוניים
