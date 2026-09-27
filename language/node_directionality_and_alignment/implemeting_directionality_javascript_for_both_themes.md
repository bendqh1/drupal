Drupal 11 separates the UI language from the content language; this makes creating, editing and sometimes also viewing nodes in languages with different directionality of that of the website's default language, difficult or impossible.

## Case

Drupal 11.4.5 with Hebrew as the default language and several left to right languages.

LTR language node appears RTL in the following three instances:

1. Node view
2. Node edit
3. Node creation

To solve this problem, I started creating LTR content types (node types) for LTR nodes and gave any such content type the prefix of `ltr_page_` (in the machine name).

I use this prefix to fix the directionality of the node in all instances, with the following JavaScript.

For the view and edit instances I do it based on the body CSS class, such as the following (thus it appears on the DOM tree of the webpage):

```
page-node-type-ltr-page-english
page-node-type-ltr-page-thai
```

For the node creation instance, I do it based on the form's heading (`<h1>`), starting with `ltr_page_`.

## JavaScript

The following JavaScript should work if it is applied to **both** the admin theme and the website theme (whether if they are identical or not).

```js
[1, 10, 100, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000].forEach(function (delay) {
  setTimeout(function () {

    if (
      // prevent the new CSS style from being added as the number of the timeouts
      !document.getElementById('force-ltr-style') &&
      (document.body.className.includes('ltr-page-') ||
       window.location.pathname.includes('ltr_page_'))
    ) {
      var style = document.createElement('style');
      style.id = 'force-ltr-style';

      style.textContent = `
        html,
        body,
        body * {
          direction: ltr !important;
          text-align: left !important;
        }
      `;

      document.head.appendChild(style);
    }

  }, delay);
});
```

### Notes

Note the difference between `ltr-page-` and `ltr-page_`.

### How to run the JS for both themes (assuming they are not the same)

The standard way to do this is with a custom module.

In `/modules/js_both_ways/` put:

#### js_both_ways.info.yml

```yml
name: JS Both Ways
type: module
core_version_requirement: ^11
package: Custom
```

#### js_both_ways.libraries.yml

```yml
admin:
  js:
    js/admin.js: {}

frontend:
  js:
    js/frontend.js: {}
```

#### js_both_ways.php

```php
<?php

/**
 * Implements hook_page_attachments().
 */
function js_both_ways_page_attachments(array &$attachments): void {
  $route = \Drupal::routeMatch()->getRouteObject();

  if ($route && $route->getOption('_admin_route')) {
    $attachments['#attached']['library'][] = 'my_custom/admin';
  }
  else {
    $attachments['#attached']['library'][] = 'my_custom/frontend';
  }
}
```

#### js_both_ways.js

```js
JS_COMES_HERE
```
