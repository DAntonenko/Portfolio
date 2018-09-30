var hamburger = document.querySelector(".hamburger");
var curtain = document.querySelector(".curtain");
var sideMenu = document.querySelector(".side-menu");

var hamburgerLineUpper = document.querySelector(".hamburger-line_upper");

hamburger.addEventListener("click", function(evt) {
	evt.preventDefault();
	curtain.classList.toggle("modal-hide");
	sideMenu.classList.toggle("modal-hide");

	if (curtain.classList.contains("curtain-close")) {
		curtain.classList.add("curtain-open");
		curtain.classList.remove("curtain-close");
		curtain.classList.remove("modal-show");
	} 
	else {
		curtain.classList.add("curtain-close");
		curtain.classList.remove("curtain-open");
		curtain.classList.add("modal-show");
		hamburgerLineUpper.classList.add("line-down");
		/*hamburgerLineUpper.classList.add("line-rotate");*/
	}

	if (sideMenu.classList.contains("curtain-close")) {
		sideMenu.classList.add("curtain-open");
		sideMenu.classList.remove("curtain-close");
		sideMenu.classList.remove("modal-show");
	} 
	else {
		sideMenu.classList.add("curtain-close");
		sideMenu.classList.remove("curtain-open");
		sideMenu.classList.add("modal-show");
	}
});

/*
window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (!curtain.classList.contains("modal-hide")) {
			curtain.classList.add("modal-hide");
			sideMenu.classList.add("modal-hide");
		}
	}
});
*/