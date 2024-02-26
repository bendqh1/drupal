I used the following code to override the style of a view of nodes about language learning.

```js
blockToWorkOn = document.querySelector('.block-views-blockthai-language-learning-chapters-block-1');
blockToWorkOn.querySelectorAll('h2 > a').forEach( (element)=>{
    element.removeAttribute('href');
})

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .node__title a:hover {
        color: unset;
    }
`;
document.head.appendChild(newStyle);
```
