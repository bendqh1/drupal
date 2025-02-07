If you put contact links in that footer and they appear at the top of the wrapper, similar fixes may help, especially in desktop display:

```css
@media screen and (min-width: 999px) {

    .region--footer-bottom {
        display: flex;
        align-items: center; /* Parallel to vertical align with tables; */
        justify-content: center;
        min-height: 100px;
    }
    
    #block-globalrs-blwqyzyrtqsrmyydybswphtrbklhtzwgwt > div.block__content > div,
    #block-globalrs-blwqyzyrtqsrmyydybswphtrbklhtzwgwt {
        margin-bottom: 0;
    }

}
```
