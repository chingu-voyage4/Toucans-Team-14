/*
==================================================

Section 6 (and 5) Navbar

==================================================
*/
const section6Nav = document.getElementById('section6-nav');

function setEventListeners() {
    section6Nav.addEventListener('click', function(event) {changeBackground(event);});
}

function changeBackground(event) {
    var lis = section6Nav.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'white';
    }
    var parentTarget = event.target.parentElement;
    parentTarget.style.backgroundColor = 'gold';
    displayContent(parentTarget);
}

function displayContent(event) {
    var section6 = document.getElementById('section6');
    var subSections = section6.getElementsByTagName('section');
    for (var i = 0; i < subSections.length; i++) {
        var sectionId = subSections[i].id;
        if (event.id == sectionId + '-nav') {
            document.getElementById(sectionId).style.display = 'flex';
        }
        else {
            document.getElementById(sectionId).style.display = 'none';
        }
    }
}
setEventListeners();

/*
==================================================

Section 5 Navbar

==================================================
*/

const sec5Nav = document.getElementById('section5-nav');
var sec5NavTabs = sec5Nav.getElementsByTagName('li');           //creates NodeList
const sec5 = document.getElementById('section5');
var sec5SubSections = sec5.getElementsByTagName('section');

function changeSec5Background() {
  for (let i = 0; i < sec5NavTabs.length; i++) {
    if (this.id == sec5NavTabs[i].id) {   
      sec5NavTabs[i].style.backgroundColor = 'black';
      sec5SubSections[i].className = 'section5ContentContainer'
    } else {
      sec5NavTabs[i].style.backgroundColor = '#2e75cf';
      sec5SubSections[i].className = 'sec5Hidden';
    }
  } 
}

(function () {
  for (let i = 0; i < sec5NavTabs.length; i++) {
    sec5NavTabs[i].addEventListener('click', changeSec5Background, false);
  }
})();


/*
==================================================

Scrolling

==================================================
*/


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});