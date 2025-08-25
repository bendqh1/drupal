In Drupal 11.2.2 with Arabic as main language and English as a second language, I have a node set to `English`.<br>
When I edit it, I use the following JavaScript code to make everything have an `ltr` direction, so I could read and edit the English in the correct alignment and directionality.

```js
// ==UserScript==
// @name         LTR edit
// @match        *://example.com/*/*
// ==/UserScript==

window.setInterval ( ()=>{

if (
    document.body.classList.contains(
        "page-node-type-page-in-english"
    )
) {
    document.querySelectorAll('*').forEach( (element)=>{
        element.setAttribute("dir", "ltr");
    });
}

}, 1000);
```

My problem is that after about 2-4 seconds, Drupal (or CkEditor, I am not sure) will cause a "flash" of bringing everything back to `rtl`. Now then, it will immediately be back to `ltr` but the "flash" is still a bit annoying.

I force `dir="ltr"` but Drupal or CKEditor brings back `dir="rtl"` - how to solve that if at all possible?
