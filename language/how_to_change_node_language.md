## Question

In Drupal 10.3 I have created a content type in the Thai language and created just one node with it.

The language of the node I have created is therefore Thai.

After creating the aforementioned node, I have changed the language of the content type from Thai (th) to English (el).

My problem is that the first node that I have created with this content type is still in Thai (the node's language wasn't changed to English after changing the language of the content type and is still Thai).

 How to change the language of a node in Drupal? In this case, how to change the language of the aforementioned node from Thai to English so its language would be identical to the one of other, newer nodes of the same content type?

 ## Answer

 To change the language of an existing node in Drupal 10.3, you'll need to manually update the language field for that node, as changing the language of the content type doesn't automatically update the language of existing nodes.

Here's how you can change the language of your node from Thai to English:

Step-by-step guide:
Edit the Node:

Go to the Content page (/admin/content).
Locate the node that you want to change the language for.
Click the Edit button for that node.
Change the Language:

In the node edit form, you should see a field labeled Language (this may be on the sidebar or at the top of the page, depending on your theme and admin configuration).
If the language field is visible, you can directly change it from Thai to English (or whatever language you prefer).
If you don't see the language field, it might be hidden. In that case, you need to adjust the language settings for nodes.
Language Settings for Nodes (if the language field is not visible):

Go to Configuration > Regional and Language > Content language and translation (/admin/config/regional/content-language).
Ensure that English (el) is enabled for the content type.
Under the Language settings section, verify that "Allow content language to be selected" is checked. This will ensure that the language field is visible when editing nodes.
Save the Node:

After changing the language, make sure to save the node.
The node's language will now be set to English, and it will align with any newer nodes created with the English language.
