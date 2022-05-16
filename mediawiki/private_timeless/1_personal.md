* In skins/Timeless/includes/TimelessTemplate.php
* Remove:

```php
$html .= Html::rawElement( 'div', [ 'id' => 'personal' ],
	Html::rawElement( 'h2', [],
		Html::element( 'span', [], $dropdownHeader )
	) .
	Html::rawElement( 'div', [ 'id' => 'personal-inner', 'class' => 'dropdown' ],
		$this->getPortlet( 'personal', $personalTools, $headerMsg )
	)
);
```
