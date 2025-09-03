Make a view of a responsive grid.

Say that in desktop display it has two horizontally juxtaposed items and in mobile two vertically juxtaposed items.

Set its `Minimum grid cell width` to have, say 250px (for two items) or 500px for four items.

##Centralization

If we want to centralize everything responsively we can use similar CSS:

VIEW HEADER WRAPPER (if there is an header) {
		display: grid;
		place-items: center;
}

VIEW ITEMS WRAPPER {
	display: grid;
	place-items: center;
}

VIEW ITEMS img {
	margin: 0 auto;
}
