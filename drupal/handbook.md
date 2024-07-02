## Set default text format

```shell
/admin/config/content/formats
```

## Reset a user password with Drush

```shell
drush user:password USERNAME "SOMEPASSWORD"
```

## In case there are no minimal URLs

Login as `?example.com/q=user`

## Caching

### Disable caching

https://www.drupal.org/docs/develop/development-tools/disable-caching

### Flush all caches

```shell
drush cache-rebuild
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

## How to add a automatically updated `current year` to the bottomost part of a Drupal website

One way is creating a block with this content.

```html
<span style="text-align: center;"><script>document.write( new Date().getFullYear() );</script></span>
```

SEOwise this approach is wrong because not necessarily any search engine crawler will wait for JavaScript scripts to track down structure and content created with JavaScript.

### Sub-theme

Let's say that the theme is a sub-theme of Olivero.

Copy `/core/themes/olivero/templates/layout/region--footer-bottom.html.twig` to `/themes/subtheme/templates/region--footer-bottom.html.twig` and then add **in the end of it** the following code:

```
<div style="text-align: center; font-weight: bold;">{{ 'now' | date('Y') }}</div>
```

If you have added a "Call now" triangle of say 50px height, add this instead:

```php
<div style="min-height: 50px; text-align: center; font-weight: bold;">{{ 'now' | date('Y') }}</div>
```

## RSS feed

Keep the "Frontpage" View on, for RSS feeds.

## Copying images to Drupal blocks

Copy compressed images as files, don't copy a compressed image after opening it with a photo viewer as the photo viewer may improve it's quality and double its file weight.

#### Chapter note

© כל הזכויות שמורות - X. אין להעתיק תוכן ללא אישור מפורש מבעל האתר.

## Hidden headings for taxonomy term pages and double headings for view-pages

Put the core "Page Title" block in the "Content Above" region and then:

Don't put any restriction by **content type**, rather, only restrict the pages in which you don't want the natural H1 to appear, so choose **Hide for the listed pages** (but not "Content Type") and list these pages this way, for example:

```
<front>
/blog
/category-page
```

## Make a header of a view page to appear only in the view's first page

* [Discussion](https://drupal.stackexchange.com/questions/317627/make-a-header-of-a-view-page-to-appear-only-in-the-views-first-page/317628#317628)

## I have deleted the default taxonomy term view and I have trouble restoring it from a backup, how to proceed?

### Question

10.2.6 core with no PHP customization.

I have deleted the default taxonomy term view based on the thought that I might have changed it in the past and don't recall if, when and how.

Now I am stuck with empty taxonomy term pages (all taxonomy term pages exist but don't show any associated nodes).

Pasting all content of `web/core/modules/taxonomy/config/optional/views.view.taxonomy_term.yml`<br> into:<br>
`/admin/config/development/configuration/single/import` brings this error:

> The configuration cannot be imported because it failed validation for the following reasons: 
>
> **Configuration core.entity_view_display.node.dp_byt.default** depends on the **field.field.node.dp_byt.layout_builder__layout** configuration that will not exist after import.

I don't know what it means.

The error might be related to the fact that the main language of my website is not English (the original taxonomy term view page was translated).<br>
English is enabled as well, but as a secondary language.

I have deleted the default taxonomy term view and I have trouble restoring it from a backup, how to proceed? Perhaps the better question should be how to create a minimal taxonomy term View?

### Answer

t appears that the layout_builder__layout field has been deleted from your dp_byt content type, which is causing the issue. You can try re-creating this field and then attempt the import again.

[Credit to Jagraj Singh Gill](https://drupal.stackexchange.com/a/320331/114794)

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
