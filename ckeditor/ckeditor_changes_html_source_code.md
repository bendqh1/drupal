## Question

I have added the following source code to a content block.

```html
<a href="x"><img src="x" alt="X" width="150" height="150">LINK IMAGE TEXT</a>
```

After saving the block, the source code suddenly automatically becomes:

```html
<a href="x"><img src="x" alt="x" width="150" height="150"></a>
<p>
    <a href="x>LINK IMAGE TEXT</a>
</p>
```

This is a problem because it practically creates two different links (the image link and the text link) with an **unclickable gap** between them. This may have to do with CKEditor 5's Advanced Content Filter (ACF).

Why is this happening and how would you suggest to proceed?

## Answer

If the text doesn't have to be part of the link, try to put it in a `<h3>` heading above the image, and centralize everything.
