Add these data.

## HTML in main JavaScript file

```html
document.body.insertAdjacentHTML('beforeend', `
<aside class="cbwtphone_wrapper">
</aside>
`)
```

## CSS for a floating button wrapper

```css
.cbwtphone_wrapper {
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
	background: linear-gradient(-160deg,#2494db 0%,#0d7ab8 78.66%);
}

.cbwtphone_wrapper a {
	color: #fff;
}
.cbwtphone_wrapper a:hover {
	color: #000 !important;
}
.cbwtphone_wrapper a:focus {
	color: #fff !important;
}
.cbwtphone_wrapper a:active {
	color: #fff !important;
}
.cbwtphone_wrapper a:visited {
	color: #fff;
}
```

## CSS for a WhatsApp button inside a floating button wrapper

```css
.whatsapp_link {
	display: inline-block;
	height: var(--contactWidget);
	max-height: var(--contactWidget);
	transition: none !important;
	box-shadow: none !important;
	text-decoration: none !important;
}

.whatsapp_link:hover {
	text-decoration: none !important;
}

.whatsapp_icon {
	display: inline;
	vertical-align: middle;
	width: var(--contactWidget);
	height: var(--contactWidget);
	max-width: var(--contactWidget);
	max-height: var(--contactWidget);
}

.whatsapp_text {
	display: inline;
	vertical-align: middle;
}
```
