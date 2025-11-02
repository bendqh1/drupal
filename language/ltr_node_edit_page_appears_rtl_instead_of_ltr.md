Drupal 11 is designed in such a way that if the alignment and directionality of a website's default language is Right to Left, but we also add any secondary language with Left to Right alignment and directionality, then if we come to **create or edit** a node in any such secondary language, the alignment and directionality of the website **will not** change from Right to Left to Left to Right.

I deal with this problem by that for each LtR language, I create at least one content type with the following similar name pattern `ltr_page_english_SOMETHING` where `SOMETHING` is a placeholder for more information like `general` or `physics` or `chemistry`.

Use JavaScript to make the **node edit page** LTR in everything.

```js
// ==UserScript==
// @name         Make node edit page LTR-Left
// @match        *://benaharoni.com/*/
// ==/UserScript==

if (document.body.className.includes('ltr_')) {
    document.querySelectorAll('*').forEach(el => {
        el.style.textAlign = 'left';
        el.setAttribute('dir', 'ltr');
    });

    document.querySelectorAll('.ck-editor__editable').forEach(el => {
        el.style.textAlign = 'left';
        el.setAttribute('dir', 'ltr');

        const style = document.createElement('style');
        style.textContent = `
            p, h1, h2, h3, h4, h5, h6 {
            direction: ltr !important;
            text-align: left !important;
            }
        `;
        el.appendChild(style);
    });
}
```

## Notes

* If there is a need in changing some node types (content types) then as of 11/03/2025 it can be done with the module [Convert Bundles](https://www.drupal.org/project/convert_bundles).
