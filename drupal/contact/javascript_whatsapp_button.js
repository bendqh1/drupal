document.body.insertAdjacentHTML('beforeend', `
	<aside class="cbwtphone_wrapper">
		<a class="cbwtphone_link" href="https://wa.me/NUMBER">
			<span class="cbwtphone_text">שיחת וואטסאפ</span>
			<img class="cbwtphone_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png"></img>
		</a>
	</aside>
`)

newStyle = document.createElement("style");
newStyle.type = "text/css";
newStyle.innerHTML +=`
    .cbwtphone_wrapper {
        display: flex;
	align-items: center;
	justify-content: center;
        position: fixed;
        right: 0;
	bottom: 0;
        left: 0;
        z-index: 2147483647;
        text-decoration: none;
        font-size: 120%;
        font-weight: bold;
	background: linear-gradient(-160deg,#2494db 0%,#0d7ab8 78.66%) // #149714;
    }
    .cbwtphone_link {
    	display: inline; // Drupal fix
    	text-decoration: none; // Continuing line problem fix
    }
    .cbwtphone_icon {
   	display: inline; // Drupal fix
        width: 50px;
        height: 50px;
	vertical-align: middle;
    }
    .cbwtphone_text {
    	display: inline; // Drupal fix
    	vertical-align: middle;
	color: #fff;
    }
`;
document.head.appendChild(newStyle);
