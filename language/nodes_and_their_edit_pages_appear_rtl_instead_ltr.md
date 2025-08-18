Drupal 11.2.2 core with an Olivero sub-theme just for some custom CSS and JavaScript and with Arabic as default language and English as secondary language.

I have created a content type (node type) named "**English pages**" and set its language to `English`.

I have added a node to the "English pages" node type and its language is automatically set to `English` (and it also appears that it is set to `English` anyway).

## My problem

My problem is that the **node's heading** and the **edit page** of the node both appear RtL whilst the node's body appear LtR.

When I check the node with the web browser developer tool, I do see that its body tag has a `dir="rtl"` attribute but it probably should have been `dir="ltr"` because again, the node language is set to `English`.

## Further information

* All caches flushed.
* No JavaScript or CSS conflicts.
* My operating system and my web browser Microsoft Edge 139.0.3405.86 are both in English.
* The source code of the nodes does not contain any `dir="rtl"` HTML attributes or `direction: rtl` commands.
* It is the same situation when logged in and when logged out with the heading; the node's heading is RtL when in English (the node's body isn't). Anyway, the `dir` attribute of the `body` tag of the node is `rtl` and the CKEditor edit page of the node is totally RtL in everything.
* I can try some JavaScript and/or CSS fixes but I don't think that it is the correct way to go here because I assume that Drupal should figure out which **segment alignment** and **text directionality** are correct based on the language set for a node.

## My question

How to solve that problem?

* Should putting `<main{{ page.attributes.addAttribute('dir', language.getDirection()) }}>` in the start of **html.html.twig** or in the start of **page.html.twig** help?
* Should activating the *Language Detection* feature of Drupal core and select language detection per node set language help? I am hesitant to do that because in the past, the Language Detection feature created thousands of robotic aliases for pages and I don't want this outcome again.
* Would you suggest a totally different approach?

Very short answer without emojis and without anything that looks like emojis (no computer characters which look like emojis).

## Answer

Updating your `page.html.twig` or `html.html.twig` template to dynamically set the dir attribute based on the node's language direction is the correct solution. For example, in `html.html.twig`, set:

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
