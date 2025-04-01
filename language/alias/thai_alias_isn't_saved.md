In 10.3.1 core without the module [Redirect][1] I have created a content type and set its language to Thai. 
I then created a node for that content type and gave it a Thai alias like `/ก-ข`. 
The alias wasn't saved and even changing it to an English alias like `/a-b` isn't saved. 
Both aliases appear to be saved along with the node just fine and there isn't an error anywhere but they aren't really.
it appears from checking both aliases in web browsers after flushing all caches that Drupal just doesn't recognize them (a page with each alias "doesn't exist").

What to do?

###

Just as you give Hebrew pages an English alias thus give Thai pages an English alias.

However, try to make pages in English instead in Thai; perhaps Thai isn't well spported as of year 2024 in Drupal. 

Thai script is known to be a "special" script in computing systems, perhaps due to its `LtR-yet-seldom-RtL` behavior.
