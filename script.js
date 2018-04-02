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


/*
==================================================

Carousel Styling

==================================================
*/

var carousel = document.getElementById('carousel');         // Reference to carousel

function changeCarouselColors(e) {
    var carButtons = carousel.getElementsByTagName('li');   // NodeList for carousel buttons
    var targetParent = e.target.parentNode;                 // Reference to parent of event target
    var targetParentId = targetParent.id;                   // Reference to id of parent node
    for (let i = 0; i < carButtons.length; i++) {
        switch (targetParentId) {  
 
            // Assign white outline to the following sections                       
            case 'section1Car':
            case 'section3Car':
            case 'section4Car': 
            case 'current-projectsCar':
                carousel.className = 'carouselWhite';
                if (carButtons[i].id == targetParentId) {
                    carButtons[i].style.backgroundColor = 'white';
                } else {
                    carButtons[i].style.backgroundColor = 'transparent';
                }
                break;

            // Assign black outline to the following sections 
            case 'section2Car':                     
            case 'performanceCar':
            case 'section7Car':
            case 'section8Car':
                carousel.className = 'carouselBlack';

                // Assign black fill to target
                if (carButtons[i].id == targetParentId) {                   // id belongs to parent <li>, as opposed to inner <a>
                    carButtons[i].style.backgroundColor = 'black';
                } else {
                    carButtons[i].style.backgroundColor = 'transparent';    // reset all other buttons to transparent
                }
                break;
            // Default case    
            default:
                carousel.className = 'carouselWhite';
                if (carButtons[i].id == targetParentId) {
                    carButtons[i].style.backgroundColor = 'white';
                } else {
                    carButtons[i].style.backgroundColor = 'transparent';
                }
                break; 
        }
  }
}

// ADD EVENT LISTENER
carousel.addEventListener('click', function(e) {
  changeCarouselColors(e);
}, false);



// -----------

/*

const carousel = document.getElementById('carousel');   
var carButtons = carousel.getElementsByTagName('li');   // NodeList for carousel buttons
var carButtons = carousel.querySelectorAll('div');      //reference to inner div

 function changeCarouselColors() {
        var buttonId = this.id;                         // get ID of clicked button
        for (let i = 0; i < carButtons.length; i++) {
            switch (buttonId) {                         //assign white color if button selected
                case 'section1Car':
                case 'section3Car':
                case 'section4Car': 
                case 'current-projectsCar':
                    carousel.className = 'carouselWhite';
                    if (carButtons[i].id == buttonId) {
                        carButtons[i].style.backgroundColor = 'white';
                    } else {
                        carButtons[i].style.backgroundColor = 'transparent';
                    }
                    break;
                case 'section2Car':                     //assign black color if button selected 
                case 'performanceCar':
                case 'section7Car':
                case 'section8Car':
                    carousel.className = 'carouselBlack';
                    if (carButtons[i].id == buttonId) {
                        carButtons[i].style.backgroundColor = 'black';
                    } else {
                        carButtons[i].style.backgroundColor = 'transparent';
                    }
                    break;
                default:
                    carousel.className = 'carouselWhite';
                    if (carButtons[i].id == buttonId) {
                        carButtons[i].style.backgroundColor = 'white';
                    } else {
                        carButtons[i].style.backgroundColor = 'transparent';
                    }
                    break; 
            }
        }
}

(function () {
    for (let i = 0; i < carButtons.length; i++) {
      carButtons[i].addEventListener('click', changeCarouselColors);
    }
  })();

*/