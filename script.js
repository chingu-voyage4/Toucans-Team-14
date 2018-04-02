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
    let lis = section6Nav.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'white';
    }
    let parentTarget = event.target.parentElement;
    if (parentTarget.tagName != 'LI') {
        parentTarget = parentTarget.parentElement;
    }
    parentTarget.style.backgroundColor = 'gold';
    displayContent(parentTarget);
}

function displayContent(parentTarget) {
    var section6 = document.getElementById('section6');
    var subSections = section6.getElementsByTagName('section');
    for (let i = 0; i < subSections.length; i++) {
        let sectionId = subSections[i].id;
        if (parentTarget.id == sectionId + '-nav') {
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
