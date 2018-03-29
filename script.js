/*
==================================================

Section 6 Navbar

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

const sec5Nav = document.getElementById('section5-nav');        // reference to navbar element node
var sec5NavTabs = sec5Nav.getElementsByTagName('li');           // NodeList for section 5 navbar tabs
const sec5 = document.getElementById('section5');               // reference to section 5 element node
var sec5SubSections = sec5.getElementsByTagName('section');     // NodeList for section 5 subsections

function changeSec5Background(e) {
  var target = e.target;
  var elParent = target.parentNode;
  for (let i = 0; i < sec5NavTabs.length; i++) {
    if ((target.id == sec5NavTabs[i].id) || (elParent.id == sec5NavTabs[i].id)) {                         // "this" references element that triggered event
      sec5NavTabs[i].className = 'nav5-itemsClear';             // change background color of subsection's tab
      sec5SubSections[i].className = 'section5ContentContainer' // render active subsection's html content visible
      sec5.className = sec5SubSections[i].id + 'Bckgd';         // modify's class to change to active subsection's background image
    } else {
      sec5NavTabs[i].className = 'nav5-itemsBlue';              // apply default color to inactive navbar tabs
      sec5SubSections[i].className = 'sec5Hidden';              // render inactive subsections' HTML hidden
    } 
  }   
}

// IIFE automatically assigns a separate listening event to each tab in navbar

sec5Nav.addEventListener('click', function(e) {
  changeSec5Background(e);
}, false);


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