/*
==================================================

Section 1 rotating text

==================================================
*/

// TRYING TO FIGURE OUT THE setTimeout FUNCTION (Why doesn't the for/while loop wait until timeout is done before continuing???)

rotatingDisplay();

function rotatingDisplay() {
    var i = 1;
    while (i <= 1) {
        /* display: block - current icon/text pair */
        setDisplay(i);
        /* wait 3 seconds */
        /* display: none - current icon/text pair */
        // setTimeout(function() {
        //     document.getElementById("section1").style.display="none";
        //     }, 3000);
        i++;
    }
}

function setDisplay(i) {
        var icon = document.getElementById("icon" + i);
        icon.style.display = "block";
        var text = document.getElementById("text" + i);
        text.style.display = "block";
}

function removeDisplay(i) {
    document.getElementById("section1").style.display="none";

    // var icon = document.getElementById("icon" + i);
    // icon.style.display = "none";
    // var text = document.getElementById("text" + i);
    // text.style.display = "none";
}



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
