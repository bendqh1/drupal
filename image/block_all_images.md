If our web browser is backendly blocking all images (not frontendly from JavaScript but from the web browser itself) we may do this (untested codes):

## PHP approach

```php
function YOUR_THEME_preprocess_image(array &$variables) {
  $accept_header = \Drupal::request()->headers->get('Accept');

  if (strpos($accept_header, 'image') === FALSE) {
    $variables['alt'] = ''; // Remove alt text
    $variables['figcaption'] = ''; // Remove figcaption text
  }
}
```

## JavaScript approach

```js
document.addEventListener('DOMContentLoaded', function () {
  // Check if any images are loaded
  var images = document.querySelectorAll('img');
  var imagesBlocked = true;

  images.forEach(function(img) {
    if (img.naturalWidth > 0) {
      imagesBlocked = false;
    }
  });

  if (imagesBlocked) {
    // Remove alt text and figcaption if images are blocked
    document.querySelectorAll('img[alt]').forEach(function(img) {
      img.alt = '';
    });
    document.querySelectorAll('figcaption').forEach(function(caption) {
      caption.remove();
    });
  }
});
```
