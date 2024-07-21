One way:

```js
document.querySelector("#layout-builder").scrollIntoView();
```

Second way:

```js
document.querySelector("#layout-builder").forEach( (element)=>{
	element.scrollIntoView({
		behavior: 'smooth'
	});
});
```
