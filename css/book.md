Giving `position: sticky` to JavaScript scripts in Drupal is problematic because:

``position: sticky`` only works inside a scrollable ancestor with a set height. 

Drupal’s scripts usually live in containers that just flow with the page, and the real scroll container is the whole `<html>/<body>`, which doesn’t provide the fixed-height context sticky needs.
