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

const section5Nav = document.getElementById('section5-nav');

function setSec5EventListeners() {
  section5Nav.addEventListener('click', function(event) {changeSec5Background(event);});
}

function changeSec5Background(event) {
  var allTabs = section5Nav.getElementsByTagName('li');
  for (let i = 1; i < allTabs.length; i++) {
    if (event.id = allTabs[i].id - '-nav') {
      allTabs[i].className = 'nav5-itemsClear';
    } else {
      allTabs[i].className = 'nav5-itemsBlue'
    }
  /*  var parentTarget = event.target.parentElement;*/
    displaySec5Content(parentTarget);
  }

/*
  var nav5Buttons = section5Nav.getElementsByTagName('li');
  for (var i = 0; i < nav5Buttons.length; i++) {
    nav5Buttons[i].style.backgroundColor = '#2e75cf';
  }
  var parentTarget = event.target.parentElement;
  parentTarget.style.backgroundColor = 'black';
  displaySec5Content(parentTarget);
} */

function displaySec5Content(event) {
  var section5 = document.getElementById('section5');
  var subSections = section5.getElementsByTagName('section');
  for (var i = 0; i < subSections.length; i++) {
    var sectionId = subSections[i].id;
    if (event.id == sectionId + '-nav') {
      document.getElementById(sectionId).className = 'section5ContentContainer';
    }
    else {
      document.getElementById(sectionId).className = 'sec5Hidden';
    }
  }
}

setSec5EventListeners();


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