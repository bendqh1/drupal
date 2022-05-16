```javascript
// ==UserScript==
// @name        New script - hanekudai.com
// @namespace   Violentmonkey Scripts
// @match       https://hanekudai.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 4/21/2022, 12:27:03 AM
// ==/UserScript==

let domain = window.location.host;
let protocol = window.location.protocol;
let h1 = document.querySelector("h1");

window.addEventListener('keydown', function(event) {
    if (event.altKey && event.shiftKey && event.key === 'E') {
        window.location.href = `${protocol}//${domain}/index.php?title=${h1.innerText}&action=edit`;
    }
});

window.addEventListener('keydown', function(event) {
    if (event.altKey && event.shiftKey && event.key === 'D') {
        window.location.href = `${protocol}//${domain}/index.php?title=${h1.innerText}&action=delete`;
    }
});

window.addEventListener('keydown', function(event) {
    if (event.altKey && event.shiftKey && event.key === 'H') {
        window.location.href = `${protocol}//${domain}/index.php?title=${h1.innerText}&action=history`;
    }
});

window.addEventListener('keydown', function(event) {
    if (event.altKey && event.shiftKey && event.key === 'M') {
        window.location.href = `${protocol}//${domain}/index.php/Special:MovePage/${h1.innerText}`;
    }
});
```
