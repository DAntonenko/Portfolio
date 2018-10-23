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

/* backKeyDown events */

/* crutch 
window.addEventListener('beforeunload', function (evt) {
  // Cancel the event as stated by the standard.
  evt.preventDefault();
  // Chrome requires returnValue to be set.
  evt.returnValue = '';
  curtain.classList.add("modal-hide");
	sideMenu.classList.add("modal-hide");

	photoCanvases.forEach(function(elem) {
  elem.classList.add("modal-hide");
	});
});*/

/* with little help of Krkma */

history.pushState({}, '', window.location.href);
function listener () {
	window.removeEventListener('popstate', listener);
	//history.back();
}

window.addEventListener('popstate', function() {
	console.log("jah!")
	curtain.classList.add("modal-hide");
	sideMenu.classList.add("modal-hide");

	photoCanvases.forEach(function(elem) {
  elem.classList.add("modal-hide");
	});
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
		/* evt.preventDefault(); */
		elem.classList.add("modal-hide");
	});
});

projectCards.forEach(function(elem) {
	elem.addEventListener("click", function(evt) {
		evt.preventDefault();
		/* curtain.classList.remove("modal-hide"); */
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