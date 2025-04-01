## Change directionality of nodes of a language different than the website's default

### CSS

.node.language-en {
    direction: ltr;
    text-align: left;
}

### JavaScript

(function() {
    if (document.documentElement.lang === 'en') {
    document.body.setAttribute('dir', 'ltr');
    document.body.forEach( (element)=>{
        element.style.textAlign = "left";
    }
}
})();

### Misc

body.lang-en {
    direction: ltr;
}

html[lang="en"] {
    direction: ltr;
}
