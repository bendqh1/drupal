## Question

I have a view block that shows two items in a grid.

My problem is that on desktop display viewports it looks fine, but on mobile display viewports (less than 500px approximately), it doesn't.<br>
On mobile display viewports, the two items (two content blocks) look too much near one another or the view looks too "dense".

What is the correct way to condition a view-grid to show only one column instead of two columns, in or under a specific viewport size?

## Answer

Change the format from `Grid` to `Responsive Grid` and in the settings of the responsive grid, set `Minimum grid cell width` to say 250px so that in displays of >= 500px a correct viewport response would take place.
