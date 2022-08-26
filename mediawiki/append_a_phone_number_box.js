/* כל הסקריפטים הנכתבים כאן ייטענו עבור כל המשתמשים בכל טעינת עמוד. */

window.addEventListener('DOMContentLoaded', ()=>{
	newStyle = document.createElement("style");
	newStyle.type = "text/css";
	newStyle.innerHTML +=`
		@media screen and (max-width: 840px) {
			.all_textual_cnb_wrapper {
				display: flex;
				align-items: center;
				justify-content: center;
				position: fixed;
				right: 0;
				bottom: 0;
				left: 0;
				z-index: 9999;
				height: 60px /* As this button is 60px, the footer's min-height should be 120px*/
				padding: 0 0 5px 0; /* Fixes a strange dis-centralization maybe associated with MediaWiki rendering */
				font-size: 36px;
				font-weight: bold;
				background: #149714;
			}
			.all_textual_cnb_link {
				color: #fff;
			}
			.all_textual_cnb_link:hover {
				color: #fff;
				text-decoration: none;
			}
			.all_textual_cnb_link:active {
				color: red !important; /* !important here fixed a collide with MediaWiki */
			}
			.all_textual_cnb_link:focus {
				color: #fff;
			}
		}
	`;
	document.head.appendChild(newStyle);

	newHTML = document.querySelector("body");
	newHTML.innerHTML +=`
	    <aside class="all_textual_cnb_wrapper">
		<a class="all_textual_cnb_link" href="tel:0584750900">להתקשר אלי ✆</a>
	    </aside>
	`;
});
