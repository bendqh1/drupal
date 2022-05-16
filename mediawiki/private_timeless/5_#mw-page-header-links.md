* In /skins/Timeless/includes/TimelessTemplate.php
* Cut the following code to the end of the page wrapped in a `isRegistered()`:

```php
Html::rawElement( 'div', [ 'id' => 'mw-page-header-links' ],
	// @phan-suppress-next-line SecurityCheck-DoubleEscaped
	$this->getPortlet(
		'namespaces',
		$this->pileOfTools['namespaces'],
		'timeless-namespaces',
		[ 'extra-classes' => 'tools-inline' ]
	) .
	// @phan-suppress-next-line SecurityCheck-DoubleEscaped
	$this->getPortlet(
		'more',
		$this->pileOfTools['more'],
		'timeless-more',
		[ 'extra-classes' => 'tools-inline' ]
	) .
	$this->getVariants() .
	// @phan-suppress-next-line SecurityCheck-DoubleEscaped
	$this->getPortlet(
		'views',
		$this->pileOfTools['page-primary'],
		'timeless-pagetools',
		[ 'extra-classes' => 'tools-inline' ]
	)
) .
```

