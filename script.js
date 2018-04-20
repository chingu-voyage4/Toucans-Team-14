/*
==================================================

Global objects

==================================================
*/

//array of hashes for all main sections
//used in Carousel Styling and Smooth Auto-Scroll features
const sectionHashes = [
    '#section1',
    '#introduction',
    '#section3',
    '#impact',
    '#current-projects',
    '#section6',
    '#section7',
    '#attribution'
]
//returns location of current hash in hash list
function returnHashLocation(hash) {
    return sectionHashes.indexOf(hash);
}

// reference to down arrow icon
const mainDownArrow = document.getElementById('downArrowIcon');

/*
==================================================

Carousel Styling (according to hash changes)

==================================================
*/

var carousel = document.getElementById('carousel');     // Reference to carousel
var carButtons = carousel.getElementsByTagName('li');   // NodeList for carousel buttons


function changeCarouselColor(e) {
    currentHash = location.hash;
    hashListItem = returnHashLocation(currentHash);
  //  console.log(currentHash);
  //  console.log(carButtons.item(currentHash).id)
 //   var hashLocation = carButtons.item(currentHash);
  //  console.log('hash location:', hashLocation);
    for (let i = 0; i < sectionHashes.length; i++) {

        switch (currentHash) {

            case '#section1':
            case '#section3':
            case '#impact': 
            case '#current-projects':
                carousel.className = 'carouselWhite';
                // assign white or transparent fill to carousel icon accordingly
                if (currentHash == sectionHashes[i]) {
                    carButtons[i].style.backgroundColor = 'white';
                } else {
                    carButtons[i].style.backgroundColor = 'transparent';
                }
                // change color of main arrow
                if (currentHash != '#section3') {
                    mainDownArrow.src = "assets/images/circular-down-arrow-button_white.png"
                    mainDownArrow.style.display = 'block';
                } else {
                    mainDownArrow.style.display = 'none';
                }
                    break;
                
            // Assign black outline to the following sections
            case '#introduction':                     
            case '#section6':
            case '#section7':
            case '#attribution':
                carousel.className = 'carouselBlack';
                // assign black or transparent fill to carousel icon accordingly
                if (currentHash == sectionHashes[i]) {
                    carButtons[i].style.backgroundColor = 'black';
                } else {
                    carButtons[i].style.backgroundColor = 'transparent';
                }
                // change color of main arrow to black
                if (currentHash != '#attribution') {
                    mainDownArrow.src = "assets/images/circular-down-arrow-button_black.png";
                    mainDownArrow.style.display = 'block';
                } else {
                    mainDownArrow.style.display = 'none';
                }
                
                break;
        }
    }
}

/*
==================================================

Main Arrow Function (according to hash changes)^

==================================================
*/ 

//^arrow styling is included in code logic for carousel, above

// Move to next section down
function shiftDown() {
    //get initial hash
    currentHash = location.hash;
    // console.log('Arrow - current hash:',currentHash);
    hashListItem = returnHashLocation(currentHash);
    // get location of next hash in list
    nextItem = hashListItem + 1;
    // reference for the next hash
    nextHash = sectionHashes[nextItem];

    // console.log('Hash list location:', hashListItem);
    // console.log('Next list location:', nextItem);
    // console.log('Next hash:', sectionHashes[nextItem]);

    /// got to next section down
    if (sectionHashes[nextItem]) {  // "If the next item has a hash" (i.e. not 'undefined', which the last section would return)
        //smoothscroll to bottom
        $('html, body').animate({
            scrollTop: $(nextHash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = nextHash;
        });

    }

}


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

Section 4

==================================================
*/

/* --- Event listener to listen for hash change ---  */

function checkSection4() {
    if (location.hash == '#impact') {
        removeAddSection4();
    }
}


/* ---------- Replay button for section 4 ----------------- */

/* Button removes and immediately re-adds section4 to restart animations

References:
- https://css-tricks.com/restart-css-animation/
- https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
- https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

*/

var replayButton = document.getElementById('replay');

// Remove and re-add content of section4 to re-start animations
function removeAddSection4() {
    //parent node
    var section4 = document.getElementById('impact');
    // child node
    var subsection4 = document.getElementById('impactSubsection');
    //remove child node
    var removed = section4.removeChild(subsection4);

    // Re-add subsection in section 4
    section4.appendChild(removed);
}


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


/*
==================================================

Section 6 Navbar

==================================================
*/

const section6Nav = document.getElementById('section6-nav');

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


/*
==================================================

Event Listeners

==================================================
*/

function setEventListeners() {
    // triggers carousel color change with hash change event
    window.addEventListener("hashchange", changeCarouselColor, false);
    // event listener for main down arrow
    mainDownArrow.addEventListener('click', shiftDown, false);
    // section 4 replay button - listen for hash change
    replayButton.addEventListener('click', removeAddSection4, false);
    window.addEventListener("hashchange", checkSection4, false);
    // Navbar for sections 5 and 6
    sec5Nav.addEventListener('click', function(e) {
        changeSec5Background(e);}, false);
    section6Nav.addEventListener('click', function(event) {
        changeBackground(event);});
}

setEventListeners();

/*

==================================================

Smooth auto-scroll on mousewheel and keyboard up/down arrow events 

==================================================

*/
// Resources used: 
// https://stackoverflow.com/questions/31223341/detecting-scroll-direction
// https://stackoverflow.com/questions/24217087/how-to-determine-scroll-direction-without-actually-scrolling
// https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript  
// https://www.sitepoint.com/throttle-scroll-events/
// https://lodash.com/ 
// https://stackoverflow.com/questions/13556010/referenceerror-is-not-defined
    

/* -------------  Mousewheel event handling ------- */

// Scrolls smoothly to section
function goToSection(e, direction) {
    //get hash from current view (assumes it replects current view)
    hash = window.location.hash;

    if (hash == null) {
        hash = '#section1';
    }

    console.log('hash:', hash);
    // determine list of sectionHashes list
    hashListLength = sectionHashes.length;
    console.log('List length:', hashListLength);
    //get the integer location of current hash in list
    hashLocation = returnHashLocation(hash);
    console.log('Hash location:', hashLocation);

    //if scroll direction is *up*
    if ((direction === 'up') && (hashLocation !== 0)) {
        //move up on section if not already at top (otherwise do nothing)
        hashLocation = hashLocation - 1;
        console.log('New hash location (upscroll)', hashLocation);
        hash = sectionHashes[hashLocation];
        console.log('New hash:', hash);
        //if scroll direction is *down*
    } else if ((direction === 'down') && (hashLocation < (hashListLength - 1))) {
        //move down a section if not already at bottom
        hashLocation = hashLocation + 1;
        console.log('New hash location (downscroll)', hashLocation);
        hash = sectionHashes[hashLocation];
        console.log('New hash:', hash);
    // else if hash location is first or last item in list do nothing
    }  else {
        console.log('do nothing!');
    }  // smooth-scroll to the appropriate section
        console.log('-----------------------------');
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });

}

// Determines scroll direction and returns string 'up' or 'down'
function scrollUpDown(e) {
    var direction;

    if (e.deltaY < 0) {
        console.log('scrolling up');
        direction = 'up';
    }

    if (e.deltaY > 0) {
        console.log('scrolling down');
        direction = 'down';
    }

    goToSection(e, direction);

}

// In order to avoid multiple events firing on scroll or repeated key presses, utilized the _.throttle function through "lodash" Plugin
// see: https://lodash.com/ for infomation and documentation
// additional helpful resource: https://www.sitepoint.com/throttle-scroll-events/

/* Listen to wheel event.  Does not use scrollTop because no scrolling actually occurs. Works for trackpads. */
window.addEventListener('wheel', _.throttle(scrollUpDown, 1500, { leading: true, trailing: false}));

// Prevents default scrolling action for wheel globally.  Prevents standard scrolling between intentional delays, caused by the "throttling" - see below
function noScroll(e) {
    e.preventDefault();
}

// Listen for mousewheel event
window.addEventListener('wheel', noScroll, false);

/* ------- Arrow key-press event handling -------- */

// prevent default keydown event for up and down arrows
// BUG:  command-r doesn't refresh page

function disableDefaultKeyActn(e) {
    e = e || window.event;

    if (e.keyCode === '38' || '40') {
        e.preventDefault();
    }

}

// Listen for keydown event and disable default behaviour
window.addEventListener('keydown', disableDefaultKeyActn, false);

// determine if "up or down key has been pressed and pass result to goToSection function
function keyUpDown(e) {
    // console.log('throttle test');
    e = e || window.event;

    if (e.keyCode == '38') {
        direction = 'up';
        // "goToSection" functions are in if statement to prevent execution if some other key is pressed
        goToSection(e, direction);
    } else if (e.keyCode == '40') {
        direction = 'down';
        goToSection(e, direction);
    }
}

// Listen for key-down event
window.addEventListener('keydown', _.throttle(keyUpDown, 1250, { leading: true, trailing: false}));

// End of smooth auto-scroll section