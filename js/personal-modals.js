var hamburger = document.querySelector(".hamburger");
var curtain = document.querySelector(".curtain");
var sideMenu = document.querySelector(".side-menu");

var previews = document.querySelectorAll(".photo-preview");
var photoCanvases = document.querySelectorAll(".photo-canvas");

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

/* curtain click events */

curtain.addEventListener("click", function(evt) {
	evt.preventDefault();
	curtain.classList.add("modal-hide");
	sideMenu.classList.add("modal-hide");
});

/* photo gallery events */

photoCanvases.forEach(function(elem) {
	elem.addEventListener("click", function(evt) {
		evt.preventDefault();
		elem.classList.add("modal-hide");
	});
});

previewUniver.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoUniver.classList.remove("modal-hide");
});

previewWinners.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoWinners.classList.remove("modal-hide");
});

previewPotter.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoPotter.classList.remove("modal-hide");
});

previewLecturer.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoLecturer.classList.remove("modal-hide");
});

previewYahtFront.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoYahtFront.classList.remove("modal-hide");
});

previewYahtSideways.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoYahtSideways.classList.remove("modal-hide");
});

previewMermaid.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoMermaid.classList.remove("modal-hide");
});

previewViruRAba.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoViruRAba.classList.remove("modal-hide");
});

previewSaareTirp.addEventListener("click", function(evt) {
	evt.preventDefault();
	photoSaareTirp.classList.remove("modal-hide");
});