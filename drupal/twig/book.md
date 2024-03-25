### Question

I am trying to add CSS classes to a new region `{{ page.example }}` in page.html.twig

In the start of page.html.twig, I have added a set of CSS classes:

```twig
{%
set classes = [
  'region--content', 
  'grid-full', 
  'layout--pass--content-medium',
]
%}
```

When I try to apply them to an element as follows, this element just disappears from my node.

```twig
{{ page.example.addClass(classes) }}
```

What have I done wrong?

## Answer

I didn't find a simple way to add a class with Twig so I have added it with HTML this way:

```html
<div class="region--content grid-full layout--pass--content-medium">
  {{ page.example }}
</div>
```

To test the webpage change flush all caches with Drush and flush all web browser cache.
