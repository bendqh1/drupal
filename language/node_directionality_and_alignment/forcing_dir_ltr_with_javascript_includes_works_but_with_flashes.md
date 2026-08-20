## Question

In Drupal 11.4.5 with Olivero as the main theme and Hebrew as the default language and English as a second language, I have a node set to `English`.

The node's content type (node type) body class is `page-node-type-ltr-page-english`.

I set the node to appear left to right this way:

```css
.page-node-type-ltr-page-english {
  direction: ltr;
}

.page-node-type-ltr-page-english .block-page-title-block {
  direction: ltr;
  text-align: left;
}
```

My problem is that the node's **edit page** (which has the same body class of `page-node-type-ltr-page-english`) appears right to left instead of left to right.

This massive CSS didn't help:

```css
/* LTR pages and their edit forms */
body.page-node-type-ltr-page-english {
  direction: ltr;
}

/* Page title */
body.page-node-type-ltr-page-english .block-page-title-block,
body.page-node-type-ltr-page-english .page-title {
  direction: ltr;
  text-align: left;
}

/* Node content */
body.page-node-type-ltr-page-english .node,
body.page-node-type-ltr-page-english .node__content {
  direction: ltr;
  text-align: left;
}

/* Edit form */
body.page-node-type-ltr-page-english .node-form,
body.page-node-type-ltr-page-english .form-item,
body.page-node-type-ltr-page-english .form-actions {
  direction: ltr;
  text-align: left;
}

/* Form controls */
body.page-node-type-ltr-page-english input,
body.page-node-type-ltr-page-english textarea,
body.page-node-type-ltr-page-english select {
  direction: ltr;
  text-align: left;
}

body.page-node-type-ltr-page-english .node-form {
  direction: ltr !important;
  text-align: left !important;
}

body.page-node-type-ltr-page-english .node-form * {
  direction: ltr;
}

body.page-node-type-ltr-page-english .layout-container,
body.page-node-type-ltr-page-english .region-content,
body.page-node-type-ltr-page-english .node-form,
body.page-node-type-ltr-page-english .layout-region,
body.page-node-type-ltr-page-english .form-item,
body.page-node-type-ltr-page-english .form-actions {
  direction: ltr !important;
  text-align: left !important;
}
```

I don't think that CSS is even the correct way to go due to dynamic JavaScript behavior of CKEditor 5.

The following JavaScript seems to partially solve the problem because it brings everything in the edit webpage, including CKEditor 5, the left but it has a problem of recurring flashes of refresh from time to time; it's as if CKEditor 5 tries to bring everything to be right to left from time to time, yet the following JavaScript tried to bring everything left to right and it causes a half a second flash which makes working on the webpage practically impossible.

So after about 2-4 seconds, Drupal (or CkEditor, I am not sure) will cause a "flash" of bringing everything back to `rtl`. Now then, it will immediately be back to `ltr` but the "flash" is still a bit annoying.<br>
I force `dir="ltr"` but Drupal or CKEditor brings back `dir="rtl"` - how to solve that if at all possible?

```js
// ==UserScript==
// @name         LTR edit
// @match        *://example.com/*/*
// ==/UserScript==

window.setInterval ( ()=>{

if (
    document.body.classList.contains(
        "page-node-type-ltr-page-english"
    )
) {
    document.querySelectorAll('*').forEach( (element)=>{
        element.setAttribute("dir", "ltr");
        element.style.textAlign = "left";
    });
}

}, 1000);
```
