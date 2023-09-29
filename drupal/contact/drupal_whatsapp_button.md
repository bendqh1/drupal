Add this to the HTML if you don't want to add a button by mere JavaScript:

## HTML

```html
<aside class="cbwtphone_wrapper" style="display: flex; align-items: center; justify-content: center; position: fixed; right: 0; bottom: 0; left: 0; z-index: 2147483647; text-decoration: none; font-size: 120%; font-weight: bold; background: linear-gradient(-160deg,#2494db 0%,#0d7ab8 78.66%)">
	<a href="https://wa.me/NUMBER" style="display: inline; text-decoration: none;">
		<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" style="display: inline; width: 50px; height: 50px; vertical-align: middle;"></img>
		<span style="display: inline; vertical-align: middle; color: #fff;">WhatsApp Call</span>
	</a>
</aside>
```

## CSS

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
	text-decoration: none;
	font-size: 120%;
	font-weight: bold;
	background: linear-gradient(-160deg,#2494db 0%,#0d7ab8 78.66%)
}
.cbwtphone_link {
	display: inline;
	text-decoration: none;
}
.cbwtphone_icon {
	display: inline;
	width: 50px;
	height: 50px;
	vertical-align: middle;
}
.cbwtphone_text {
	display: inline;
	vertical-align: middle;
	color: #fff;
}
```