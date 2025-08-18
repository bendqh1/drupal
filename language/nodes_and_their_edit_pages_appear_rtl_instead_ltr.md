If nodes and their edit pages appear RtL instead LtR, then:<br>
It's because Drupal relates a language writing direction to the node based on the default language of the website, instead by the node's set language.

This could be solved by updating the `page.html.twig` or `html.html.twig` template to dynamically set the `dir` attribute based on the node's language direction is the correct solution. 

For example, in `html.html.twig`, set:

```twig
<html{{ html_attributes.addAttribute('dir', language.getDirection()) }}>
```

Or, use JavaScript:

```js
if (
document.body.classList.contains(
"page-node-type-page-in-english" || "page-node-type-page-in-thai"
)
) { 
    document.body.setAttribute("dir", "ltr");
    document.querySelector('.ck-editor__editable').setAttribute("dir", "ltr");
}
```
