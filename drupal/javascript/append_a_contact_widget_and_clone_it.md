```js
// Create and append an element inside which a clone will appear

document.body.insertAdjacentHTML('beforeend', `
	<aside class="cbwtphone_wrapper">
	</aside>
`)

// Clone an element

const myClone = document.querySelector('.whatsapp_link').cloneNode(true);

// Append the clone into the created-appended element above

document.querySelector('.cbwtphone_wrapper').appendChild(myClone);
```
