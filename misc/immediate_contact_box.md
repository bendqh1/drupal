## Question

How can I add a flying block?

Drupal 11.2.2 with Olivero as the general theme.

I want to add a block which is "flying" or **sticky** to the bottom of the viewport.<br>
Such a block would typically be a "contact now" button with the logo of some application such as WhatsApp or Telegram or Signal etc.

I can add a layout to my Olivero sub-theme with Twig, to add a region under all other regions and then give that region special CSS and add the block but there may be simpler way without changing the layout. I can also do that with JavaScript.

What is the correct way to do that? I wouldn't care installing a module for that, if it's more standard or most common between Drupal developers.

## Answer

If it's just one block, create a designated JavaScript file and do it with it.
