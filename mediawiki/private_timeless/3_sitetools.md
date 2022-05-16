## Stop printing sitetools

* In /includes/skins/Skin.php
* Locate public function makeToolbox
* Comment like this:

```php
//return $toolbox;`
```

## Remove further links (such as page diaries || יומני הדף)

* In `/skins/Timeless/includes/TimelessTemplate.php
* Comment like this:

```php
//return $this->getSidebarChunk( 'page-tools', 'timeless-pageactions', $pageTools );`
```

## Remove sidebar chunk for sitetools (NOTE THE DOT)

Remove:

```php
.
$this->getSidebarChunk(
	'site-tools',
	'timeless-sitetools',
	// @phan-suppress-next-line SecurityCheck-DoubleEscaped
	$this->getPortlet(
		'tb',
		$this->pileOfTools['general'],
		'timeless-sitetools'
	)
)
```

### What was done here

We actually changed:

```php
		$html .= Html::rawElement( 'div', [ 'id' => 'mw-content-container', 'class' => 'ts-container' ],
			Html::rawElement( 'div', [ 'id' => 'mw-content-block', 'class' => 'ts-inner' ],
				Html::rawElement( 'div', [ 'id' => 'mw-content-wrapper' ],
					$this->getContentBlock() .
					$this->getAfterContent()
				) .
				Html::rawElement( 'div', [ 'id' => 'mw-site-navigation' ],
					$this->getLogo( 'p-logo', 'image' ) .
					$this->getMainNavigation() .
					$this->getSidebarChunk(
						'site-tools',
						'timeless-sitetools',
						// @phan-suppress-next-line SecurityCheck-DoubleEscaped
						$this->getPortlet(
							'tb',
							$this->pileOfTools['general'],
							'timeless-sitetools'
						)
					)
				) .
				Html::rawElement( 'div', [ 'id' => 'mw-related-navigation' ],
					$this->getPageToolSidebar() .
					$this->getInterwikiLinks() .
					$this->getCategories()
				) .
				$this->getClear()
			)
		);
```

To:

```php
$html .= Html::rawElement( 'div', [ 'id' => 'mw-content-container', 'class' => 'ts-container' ],
	Html::rawElement( 'div', [ 'id' => 'mw-content-block', 'class' => 'ts-inner' ],
		Html::rawElement( 'div', [ 'id' => 'mw-content-wrapper' ],
			$this->getContentBlock() .
			$this->getAfterContent()
		) .
		Html::rawElement( 'div', [ 'id' => 'mw-site-navigation' ],
			$this->getLogo( 'p-logo', 'image' ) .
			$this->getMainNavigation()
		) .
		Html::rawElement( 'div', [ 'id' => 'mw-related-navigation' ],
			$this->getPageToolSidebar() .
			$this->getInterwikiLinks() .
			$this->getCategories()
		) .
		$this->getClear()
	)
);
```
