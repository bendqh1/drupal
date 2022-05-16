```html
<html>
	<style>
		.bold {
				font-weight: bold;
		}

		.centralize {
				text-align: center;
		}

		.rootpage-הנקודאי .mw-body h2, .rootpage-הנקודאי .mw-body h3 {
				text-align: center;
		}

		.rootpage-הנקודאי .mw-body h2:after, .rootpage-הנקודאי .mw-body h3:after {
				border: none;
		}

		.mainpage_row {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			padding: 15px 0 15px 0;
		}

		.mainpage_row:first-child {
				padding-top: 0;
		}

		.mainpage_row:last-child {
				padding-bottom: 0;
		}

		.mainpage_box {
			box-sizing: border-box;
			width: 100%;
			padding: 10px;
			box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
			border: 1px solid #CCC;
		}

		/* Delete redundant details in "New pages" box */
		.rootpage-הנקודאי .mw-userlink,
		.rootpage-הנקודאי .mw-usertoollinks, 
		.rootpage-הנקודאי .comment,
		.rootpage-הנקודאי .mw-newpages-history,
		.rootpage-הנקודאי .mw-newpages-edit,
		.rootpage-הנקודאי .mw-newpages-oldtitle,
		.rootpage-הנקודאי .mw-newpages-length {
				display: none;
		}
		.rootpage-הנקודאי .new_pages ul li { visibility: hidden }
		.rootpage-הנקודאי .mw-newpages-time {visibility: visible}
		.rootpage-הנקודאי .mw-newpages-pagename { visibility: visible}
		#mw-content-text > div > div.mainpage_row.new_pages > div > ul {
				margin-right: 0 !important;
		}
		
		@media screen and (max-width: 980px) {
			.mainpage_row {
				display: flex;
				flex-direction: column;
				justify-content: center;
				padding: 0;
				margin: 10px 0 10px 0;
			}
			.mainpage_box {
				margin: 10px 0 10px 0;
			}
		}
	</style>
</html>

==שירותים שאני מספק==
<div class="mainpage_row centralize">
	<div class="mainpage_box">[[קידום אתרים אורגני]]</div>
	<div class="mainpage_box">[[קידום אתרים אורגני]]</div>
	div class="mainpage_box">[[קידום אתרים אורגני]]</div>
	<div class="mainpage_box">[[קידום אתרים אורגני]]</div>
</div>

==לקרוא באתר==
<div class="mainpage_row centralize">
	<div class="mainpage_box">יש כרגע באתר {{NUMBEROFARTICLES}} {{קתים}}</div>
	<div class="mainpage_box">[[מיוחד:דף אקראי|{{קת}} אקראי]]</div>
</div>

===מבחר {{קתים}}===
<div class="mainpage_row">
	<div class="mainpage_box">{{תבנית:בית 1}}</div>
	<div class="mainpage_box">{{תבנית:בית 2}}</div>
</div>

<div class="mainpage_row centralize">
	<div class="mainpage_box">[[קידום אתרים אורגני]]</div>
	<div class="mainpage_box">[[קידום אתרים אורגני]]</div>
	div class="mainpage_box">[[קידום אתרים אורגני]]</div>
	<div class="mainpage_box">[[קידום אתרים אורגני]]</div>
</div>
```
