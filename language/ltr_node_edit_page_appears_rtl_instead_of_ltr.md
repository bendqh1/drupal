Use CSS to set the `<h1>` of the **node** to `direction: ltr` (if needed, because I had to do it in one case).

Use JavaScript to make the **node edit page** LTR in everything.

```js
// ==UserScript==
// @name         Make node edit page LTR-Left
// @match        *://benaharoni.com/*/
// ==/UserScript==

if (
    document.body.classList.contains(
        "page-node-type-page-in-english" ||
        "page-node-type-page-in-thai"
    )
) {
    document.querySelectorAll('*').forEach( (element)=>{
        element.setAttribute("dir", "ltr");
    });
}
```

Or:

```
document.body.setAttribute("dir", "ltr");
document.querySelector('.ck-editor__editable').setAttribute("dir", "ltr");
```
