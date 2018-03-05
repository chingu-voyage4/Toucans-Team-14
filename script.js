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

function changeBackground(event) {
    var section6Nav = document.getElementById('section6-nav');
    var lis = section6Nav.getElementsByTagName('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.backgroundColor = 'white';
    }
    event.style.backgroundColor = 'gold';
    displayContent(event);
}

function displayContent(event) {
    var section6 = document.getElementById('section6');
    var subSections = section6.getElementsByTagName('section');
    for (var i = 0; i < subSections.length; i++) {
        if (subSections[i].id != event.id) {
            subSections[i].setAttribute('id', 'display');
        }
        else {
            subSections[i].removeAttribute('id');
        }
    }
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
