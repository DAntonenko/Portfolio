var hamburger = document.querySelector(".hamburger");
var curtain = document.querySelector(".curtain");
var sideMenu = document.querySelector(".side-menu");

var projectCards = document.querySelectorAll(".project-card");
var popups = document.querySelectorAll(".popup");

var projectCardBarbersop = document.getElementById("barbershop");
var projectCardSedona = document.getElementById("sedona");
var projectCardHomeownersAssociation = document.getElementById("homeowners-association");
var projectCardCertificate = document.getElementById("certificate");
var projectCardThisSite = document.getElementById("this-site");

var popupBarbersop = document.querySelector(".popup-barbershop");
var popupSedona = document.querySelector(".popup-sedona");
var popupHomeownersAssociation = document.querySelector(".popup-homeowners_association");
var popupCertificate = document.querySelector(".popup-certificate");
var popupThisSite = document.querySelector(".popup-this-site");

var previewUniver = document.getElementById("preview-univer");
var previewWinners = document.getElementById("preview-winners");
var previewPotter = document.getElementById("preview-potter");
var previewLecturer = document.getElementById("preview-lecturer");
var previewYahtFront = document.getElementById("preview-yaht_front");
var previewYahtSideways = document.getElementById("preview-yaht_sideways");
var previewMermaid = document.getElementById("preview-mermaid");
var previewViruRAba = document.getElementById("preview-viru_raba");
var previewSaareTirp = document.getElementById("preview-saare_tirp");

var photoUniver = document.getElementById("photo-univer");
var photoWinners = document.getElementById("photo-winners");
var photoPotter = document.getElementById("photo-potter");
var photoLecturer = document.getElementById("photo-lecturer");
var photoYahtFront = document.getElementById("photo-yaht_front");
var photoYahtSideways = document.getElementById("photo-yaht_sideways");
var photoMermaid = document.getElementById("photo-mermaid");
var photoViruRAba = document.getElementById("photo-viru_raba");
var photoSaareTirp = document.getElementById("photo-saare_tirp");

hamburger.addEventListener("click", function(evt) {
	evt.preventDefault();
	sideMenu.classList.toggle("modal-hide");

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
/*
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
		curtain.classList.remove("modal-show");
		curtain.classList.add("modal-hide");
		sideMenu.classList.add("modal-hide");

		popups.forEach(function(elem) {
    elem.classList.remove("popup-show");
		});
	}
});

/* curtain click events */

curtain.addEventListener("click", function(evt) {
		evt.preventDefault();
		curtain.classList.remove("modal-show");
		curtain.classList.add("modal-hide");
		sideMenu.classList.add("modal-hide");

		popups.forEach(function(elem) {
    elem.classList.remove("popup-show");
  	});
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

projectCardThisSite.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupThisSite.classList.add("popup-show");
});

/* photo gallery events */

previewUniver.addEventListener("click", function(evt) {
	console.log("jah!")
	evt.preventDefault();
	photoUniver.classList.remove("modal-hide");
});