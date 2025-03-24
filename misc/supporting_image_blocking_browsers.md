## My question

Drupal core 11.3.0 website viewd from a mobile device with Android and a web browser that backendly blocks all images in the web browser level, not a frontend block in the JavaScript level.

My problem is that when images are blocked backendly, the long identical text of an image alt="" and an image <figcaption> overflows outside of the container, causing horizontal scrolling.
This problem actually happens for each one of these separately (alt text alone or figcaption text alone) but for the sake of simplicity I will focus on the alt attribute which is impossible to be controlled with CSS.

In case I don't block all images with this browser, any image and any figcaption text would appear normally without any horizontal scrolling, just as they would appear in any standart web browser.

This situation indicated that Drupal does not inherently support imageless browsing but as an attempt to make my Drupal website more accessible for those that surf the web without images (probably to prevent distraction), I ask if Drupal can support imageless web browsers and if so how to achieve that correctly.

## My answer

As of yeart 2025:

It may be a failure on the browser's part.

Try to shorten both texts or drastically reducing alt text size and shortening or removing the figcaption size (CSS `content:` command may help to print text over the image itself).

Wait for technology to improve.
