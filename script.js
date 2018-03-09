/*jslint browser: true */
// function changeBackground(event) {
//     var section6Nav = document.getElementById('section6-nav');
//     section6Nav.querySelector('li').style.backgroundColor = 'white';
    // document.getElementById('performance-nav').style.backgroundColor = 'white';
    // document.getElementById('battery-nav').style.backgroundColor = 'white';
    // document.getElementById('security-nav').style.backgroundColor = 'white';
    // document.getElementById('data-nav').style.backgroundColor = 'white';
    // event.style.backgroundColor = 'gold';
//}

// function displaySelected(section) {
//     document.getElementById(section).style.display = 'flex';
// }

const section6Nav = document.getElementById('section6-nav');
function setEventListeners() {
    section6Nav.addEventListener('click', function(event) {changeBackground(event)};
}

function changeBackground(event) {
    var lis = section6Nav.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'white';
    }
    var target = event.target;
    var parentTarget = target.parentElement;
    parentTarget.style.backgroundColor = 'gold';
    displayContent(parentTarget);
}

function displayContent(event) {
    var section6 = document.getElementById('section6');
    var subSections = section6.getElementsByTagName('section');
    for (var i = 0; i < subSections.length; i++) {
        var sectionId = subSections[i].id;
        if (target.id == sectionId + '-nav') {
            document.getElementById(sectionId).style.display = 'flex';
        }
        else {
            document.getElementById(sectionId).style.display = 'none';
        }
    }

    setEventListeners();
    // if (event.id == "battery-nav") {
    //     document.getElementById('battery').setAttribute('id', 'display');
    // }
    // else if (event.id == "security-nav") {
    //     document.getElementById('security').setAttribute('id', 'display');
    // }
    // else if (event.id == "data-nav") {
    //     document.getElementById('data').setAttribute('id', 'display');
    // }
}
