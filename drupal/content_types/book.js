## Get the number of contetnt types in the content types page with JavaScript

```js
console.log(document.querySelectorAll('tr').length -1); 
// -1 to reduce table heading;
```

## Number the rows of any content type in the content types page with JavaScript

```js
const allTableRowsExceptTableHeading = document.querySelectorAll('tr.odd, tr.even');

allTableRowsExceptTableHeading.forEach((element) => {
    const newCell = document.createElement('td');
    // This variable must be here inside the function because...
        // For each table row we work on, we create and add a table cell...

    element.insertAdjacentElement('afterbegin', newCell);

    newCell.innerHTML = '<span class="numberCell">A</span>';
    newCell.style.display = 'table-cell';
    newCell.style.width = 'maxContent';
    newCell.style.textAlign = 'center';
    newCell.style.backgroundColor = 'yellow';
    // These HTML-CSS directives must be here inside the function because...
        // For each table row we work on, we create and add these new HTML-CSS directives...
});

let baseNumber = 1;
document.querySelectorAll('.numberCell').forEach((element)=>{
    element.innerHTML = `<span>${baseNumber++}</span>`;
});
```
