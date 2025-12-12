Giving `position: sticky` to JavaScript scripts in Drupal is problematic because:

The container has no scrolling parent with a defined height — in normal Drupal pages the scroll container is `<body>/<html>`, and sticky almost never works reliably there.
