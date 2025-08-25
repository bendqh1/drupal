## Change directionality of nodes of a language different than the website's default

### CSS

```css
.node.language-en {
    direction: ltr;
    text-align: left;
}
```

### JavaScript

```js
(function() {
    if (document.documentElement.lang === 'en') {

    document.body.setAttribute('dir', 'ltr');

    document.body.forEach( (element)=>{
        element.style.textAlign = "left";
    });
})();
```

### Misc

```css
body.lang-en {
    direction: ltr;
}

html[lang="en"] {
    direction: ltr;
}
```
