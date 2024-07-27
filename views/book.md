## How to add a prefix to all taxonomy terms of a given vocabulary

If you are using the default taxonomy term view:

1. Go to `admin/structure/views/view/taxonomy_term`.
2. Do a <kbd>CTRL</kbd>+<kbd>F</kbd> search with `When the filter value is in the URL or default is provided`.
3. Click on "Override Title".
4. Change title accordingly.

Resetting the default taxonomy term view options would cause the need to repeat this action. 

## `global:random` sorting doesn't work

You probably need to go to Advanced > Caching and set there `none`.
