## Question

In a Drupal 11.2.2 website I have a node bundle (content type) to which I want to change the machine name from the database (because Drupal 8 or greater, doesn't allow doing so from the user interface). 

1. The website is core with Claro administration theme and Olivero general theme. 
1. The web doesn't have any contribution themes installed. 
1. The website doesn't have any contribution modules installed. 
1. The website has no PHP or database customizations or manipulations. 
1. The website does not have any APIs communicating with it. 
1. All content types of the website contain two fields only: Body and Tags. 
1. All content types of the website do not have menu settings. 
1. All content types of the website do not utilize node revisions. 
1. Anything, anywhere, is pretty much default. 

Given the simplicity of the system, how could I safely change the machine name of the content type from the database? Short answer, no waffling, no emojis, no colorful characters, no replying in questions.

## My personal answer

Because that changing the database directly is never a good idea, first consider alternatives:

* Moving nodes between content types, probably by some widely used contribution module.
* Creating a separate new content type and then move content to it, either manually or with a module.
* Adding a boolean field to the content type and utilize for any special need (such as of JavaScript or CSS).
* If being done for a later Drupal version, perhaps there will be a simpler way without changing the database.

Only if none of these is possible, do the change manually. I suggest consulting an AI tool about how to do it correctly, either from CLUI or GUI.
