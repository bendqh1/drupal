A workaround that solves this problem is running the following code with a user script manager (such as Greasemonkey or Tampermonkey).

```js
// ==UserScript==
// @name         Drupal Layout Builder Broadening
// @match        https://DOMAIN_NAME.TLD/*

// ==/UserScript==

window.setInterval(()=>{
    if (window.location.href.includes('layout')) {
        document.querySelector('#drupal-off-canvas-wrapper').style.width = "600px";
    }
}, 1);
```
