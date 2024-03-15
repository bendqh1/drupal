Add these data.

## JavaScript file HTML

```js
document.body.insertAdjacentHTML('beforeend', `
	<aside class="voip_wrapper">
	<a href="https://wa.me/972584750900" class="voip_link">
	    <span class="voip_text">שיחת וואטסאפ</span>
	    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="voip_call_icon" class="voip_icon"></img>
	</a>
	</aside>
`)
```

## CSS

```css
.voip_wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 2147483647;
	max-height: var(--contactWidget);
	height: var(--contactWidget);
	text-decoration: none;
	font-size: 120%;
	font-weight: bold;
	background: var(--primaryColor);
}

.voip_link {
	display: inline-block;
	height: var(--contactWidget);
	max-height: var(--contactWidget);
	transition: none !important;
	box-shadow: none !important;
	text-decoration: none !important;
	color: #fff;
}

.voip_link:hover {
	text-decoration: none !important;
	color: #000;
}

.voip_icon {
	display: inline;
	vertical-align: middle;

	width: var(--contactWidget);
	height: var(--contactWidget);
	max-width: var(--contactWidget);
	max-height: var(--contactWidget);

	margin-right: 5px;
}

voip_text {
	display: inline;
	vertical-align: middle;
}
```
