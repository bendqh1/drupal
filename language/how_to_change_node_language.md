## Question

In Drupal 10.3 I have created a content type in the Thai language and created just one node with it.

The language of the node I have created is therefore Thai.

After creating the aforementioned node, I have changed the language of the content type from Thai (th) to English (el).

My problem is that the first node that I have created with this content type is still in Thai (the node's language wasn't changed to English after changing the language of the content type and is still Thai).

 How to change the language of a node in Drupal? In this case, how to change the language of the aforementioned node from Thai to English so its language would be identical to the one of other, newer nodes of the same content type?

 ## Answer

Locate the node that you want to change the language for and click the Edit button.

In the node edit form, you should see a field labeled Language.<br>
This may be on the sidebar or at the top of the page, depending on your theme and admin configuration).<br>
If the language field is visible, you can directly change it from Thai to English (or whatever language you prefer).

### If the language field is not visible

Go to Configuration > Regional and Language > Content language and translation (/admin/config/regional/content-language).
Ensure that English (el) is enabled for the content type.
Under the Language settings section, verify that "Allow content language to be selected" is checked. This will ensure that the language field is visible when editing nodes.
Save the Node:

After changing the language, make sure to save the node.<br>
The node's language will now be set to English, and it will align with any newer nodes created with the English language.
