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

Section 6 Navbar

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

Section 5 Navbar

==================================================
*/

var sec5Nav = document.getElementById('section5-nav');        // reference to navbar element node

function changeSec5Background(e) {
  var sec5 = document.getElementById('current-projects');                 // reference to section 5 element node
  var sec5NavTabs = sec5Nav.getElementsByTagName('li');           // NodeList for section 5 navbar tabs
  var sec5SubSections = sec5.getElementsByTagName('section');     // NodeList for section 5 subsections
  var target = e.target;
  var elParent = target.parentNode;
  for (let i = 0; i < sec5NavTabs.length; i++) {
    if ((target.id == sec5NavTabs[i].id) || (elParent.id == sec5NavTabs[i].id)) {     // If ID of targer OR target's parent element (if user clicks on image)
      sec5NavTabs[i].className = 'nav5-itemsClear';                                   // change background color of subsection's tab
      sec5SubSections[i].className = 'section5ContentContainer'                       // render active subsection's html content visible
      sec5.className = sec5SubSections[i].id + 'Bckgd';                               // modify's class to change to active subsection's background image
    } else {                                                                          // Otherwise:
      sec5NavTabs[i].className = 'nav5-itemsBlue';                                    // apply default color to inactive navbar tabs
      sec5SubSections[i].className = 'sec5Hidden';                                    // render inactive subsections' HTML hidden
    } 
  }   
}

// Set event listener and pass in event object ("e")
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
            case 'section6Car':
            case 'section7Car':
            case 'attributionCar':
                carousel.className = 'carouselBlack';

                // Assign black fill to target
                if (carButtons[i].id == targetParentId) {                   // id belongs to parent <li>, as opposed to inner <a>
                    carButtons[i].style.backgroundColor = 'black';
                } else {
                    carButtons[i].style.backgroundColor = 'transparent';    // reset all other buttons to transparent
                }
                break;

            // SF Removed default case because it leads to <li> elements triggering carousel color change
        }
  }
}

// ADD EVENT LISTENER
carousel.addEventListener('click', function(e) {
  changeCarouselColors(e);
}, false);
