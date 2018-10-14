var hamburger = document.querySelector(".hamburger");
var curtain = document.querySelector(".curtain");
var sideMenu = document.querySelector(".side-menu");

var projectCards = document.querySelectorAll(".project-card");
var photoCanvases = document.querySelectorAll(".photo-canvas");

var projectCardBarbersop = document.getElementById("barbershop");
var projectCardSedona = document.getElementById("sedona");
var projectCardHomeownersAssociation = document.getElementById("homeowners-association");
var projectCardCertificate = document.getElementById("certificate");
var projectCardThisSite = document.getElementById("this-site");

var popupBarbersop = document.getElementById("popup-barbershop");
var popupSedona = document.getElementById("popup-sedona");
var popupHomeownersAssociation = document.getElementById("popup-homeowners_association");
var popupCertificate = document.getElementById("popup-certificate");
var popupThisSite = document.getElementById("popup-this-site");

/* hamburger events */

hamburger.addEventListener("click", function(evt) {
	evt.preventDefault();
	sideMenu.classList.toggle("modal-hide");
	curtain.classList.toggle("modal-hide");
/*	
	if (curtain.classList.contains("modal-show")) {
		curtain.classList.remove("modal-show");
		curtain.classList.add("modal-hide");
	} 
	else {
		curtain.classList.add("modal-show");
		curtain.classList.remove("modal-hide");
	};

	popups.forEach(function(elem) {
    elem.classList.remove("popup-show");
		});

	if (curtain.classList.contains("modal-show")) {
		curtain.classList.add("modal-hide");
		curtain.classList.remove("curtain-close");
		curtain.classList.remove("modal-show");
	} 
	else {
		curtain.classList.add("curtain-close");
		curtain.classList.remove("curtain-open");
		curtain.classList.add("modal-show");
		hamburgerLineUpper.classList.add("line-down");
	};

	if (sideMenu.classList.contains("curtain-close")) {
		sideMenu.classList.add("curtain-open");
		sideMenu.classList.remove("curtain-close");
		sideMenu.classList.remove("modal-show");
	} 
	else {
		sideMenu.classList.add("curtain-close");
		sideMenu.classList.remove("curtain-open");
		sideMenu.classList.add("modal-show");
	};
	*/
});

/* escape events */

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		curtain.classList.add("modal-hide");
		sideMenu.classList.add("modal-hide");

		photoCanvases.forEach(function(elem) {
    elem.classList.add("modal-hide");
		});
	}
});

/* curtain click events */

curtain.addEventListener("click", function(evt) {
		evt.preventDefault();
		curtain.classList.add("modal-hide");
		sideMenu.classList.add("modal-hide");
});

/* popup events */

photoCanvases.forEach(function(elem) {
	elem.addEventListener("click", function(evt) {
		evt.preventDefault();
		elem.classList.add("modal-hide");
	});
});

projectCards.forEach(function(elem) {
	elem.addEventListener("click", function(evt) {
		evt.preventDefault();
		/*curtain.classList.remove("modal-hide");*/
	});
});

projectCardBarbersop.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupBarbersop.classList.remove("modal-hide");
});

projectCardSedona.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupSedona.classList.remove("modal-hide");
});

projectCardHomeownersAssociation.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupHomeownersAssociation.classList.remove("modal-hide");
});

projectCardCertificate.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupCertificate.classList.remove("modal-hide");
});

projectCardThisSite.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupThisSite.classList.remove("modal-hide");
});