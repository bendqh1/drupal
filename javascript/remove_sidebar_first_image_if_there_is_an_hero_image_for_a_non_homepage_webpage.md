```js
// remove sidebar first image if there is_an hero image for a non homepage webpage.md

if  (
    document.querySelector('.node-275')
    ||
    document.querySelector('#block-globalrs-content > div > article > div > div.text-content.clearfix.field.field--name-body.field--type-text-with-summary.field--label-hidden.field__item > img')
    ) {
    document.querySelector('.region--sidebar img:first-child').remove();
};
```
