Drupal 11.4.5 with Hebrew as the default language and several left to right languages.

LTR language node appear RTL in the following three instances:

1. Node view
2. Node edit
3. Node creation

To solve this problem, I started creating LTR content types for LTR nodes and gave any such content type the prefix of `ltr_page_`.

I use this prefix to fix the directionality of the node in all instances, with the following JavaScript.

For the view and edit instances I do it based on the body CSS class, such as:

```
page-node-type-ltr-page-english
```

For the node creation instance, I do it based on the form's heading, starting with Create `ltr-page-SOMETHING`.

## JavaScript

```js
(function () {
  const ltrClasses = [
    'page-node-type-ltr-page-english',
    'page-node-type-ltr-page-thai'
  ];

  const isLTR =
    ltrClasses.some(c => document.body.classList.contains(c)) ||
    window.location.pathname.includes('ltr_page_');

  if (!isLTR) return;

  const style = document.createElement('style');

  style.textContent = `
    html,
    body,
    body * {
      direction: ltr !important;
      text-align: left !important;
    }
  `;

  document.head.appendChild(style);

  document.documentElement.dir = 'ltr';
  document.body.dir = 'ltr';
})();
```
