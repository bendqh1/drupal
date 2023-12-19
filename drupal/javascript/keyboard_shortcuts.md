## Click Edit primary tab

```js
window.addEventListener('keydown', function(event) {
  if (event.altKey && event.shiftKey && event.key === 'E') {
    document.querySelector('#block-olivero-primary-local-tasks > div.block__content > nav > ul > li:nth-child(2) > a').click();
  }
});

// event.key === 'e' didn't work event.key === 'E' did work;
```

## Click Layout primary tab

```js
window.addEventListener('keydown', function(event) {
  if (event.altKey && event.shiftKey && event.key === 'L') {
    document.querySelector('#block-globalrs-primary-local-tasks > div.block__content > nav > ul > li:nth-child(4) > a').click();
  }
});

// event.key === 'e' didn't work event.key === 'E' did work;
```

## Go to Layout Builder area

```js
window.addEventListener('keydown', function(event) {
  if (event.altKey && event.shiftKey && event.key === 'G') {
      document.querySelector('#layout-builder').scrollIntoView({behavior: 'smooth'});
  }
});
```

## Go to primary buttons area inside the Layout Builder edit page

```js
window.addEventListener('keydown', function(event) {
    if (event.altKey && event.shiftKey && event.key === 'U') {
        document.querySelectorAll('h1')[1].scrollIntoView({behavior: 'smooth'});
    }
});
```
