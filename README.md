When creating a Left-to-Right node in a defaultly Right-to-left website, one may need to run the following code or part of it.

```js
window.setInterval ( ()=>{
    document.querySelectorAll('*').forEach( (element)=>{
        element.setAttribute("dir", "ltr");
    });
}, 1);
```
