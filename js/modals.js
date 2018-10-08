var hamburger = document.querySelector(".hamburger");
var curtain = document.querySelector(".curtain");
var sideMenu = document.querySelector(".side-menu");

var hamburgerLineUpper = document.querySelector(".hamburger-line_upper");

var projectCards = document.querySelectorAll(".project-card");
var popups = document.querySelectorAll(".popup");

var projectCardBarbersop = document.getElementById("barbershop");
var projectCardSedona = document.getElementById("sedona");
var projectCardHomeownersAssociation = document.getElementById("homeowners-association");
var projectCardCertificate = document.getElementById("certificate");

var popupBarbersop = document.querySelector(".popup-barbershop");
var popupSedona = document.querySelector(".popup-sedona");
var popupHomeownersAssociation = document.querySelector(".popup-homeowners_association");
var popupCertificate = document.querySelector(".popup-certificate");

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

/* escape events */

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		curtain.classList.add("modal-hide");
		sideMenu.classList.add("modal-hide");

		popups.forEach(function(elem) {
    elem.classList.remove("popup-show");
		});
	}
});

/* popup events */

projectCards.forEach(function(elem) {
	elem.addEventListener("click", function(evt) {
		evt.preventDefault();
		curtain.classList.remove("modal-hide");
	});
});

projectCardBarbersop.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupBarbersop.classList.add("popup-show");
});

projectCardSedona.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupSedona.classList.add("popup-show");
});

projectCardHomeownersAssociation.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupHomeownersAssociation.classList.add("popup-show");
});

projectCardCertificate.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupCertificate.classList.add("popup-show");
});

