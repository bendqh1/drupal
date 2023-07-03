## Asset injector

https://www.drupal.org/project/asset_injector/issues/3314720

## Set default text format

/admin/config/content/formats

## Hide a Drupal homepage heading

Structure > Blocks > Content Above > 	כותרת דף > Settings > Pages > Hide for the listed pages > /node/1

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


## Misc

Drupal uncustomized core 9.5.3 upgraded to 9.5.9 (first version was probably 9.4.5).

I thought that a node has a taxonomy term but the taxonomy-term-webpage doesn't mention this node.<br>
I believed that this problem is part of a broader problem in which taxonomy-term-webpages don't have h1 headings.

I was wrong.<br>
the taxonomy-term-page did mentioned this node.<br>
I didn't notice that due to it having only one value, the value text was very generic and short `תכנים אחרונים` and no link styling was directly apparent.
