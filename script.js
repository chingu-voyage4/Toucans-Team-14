var section2Scroll = document.getElementById("section2");
var topPos = section2Scroll.offsetTop
var elem3 = document.getElementById('section3');
var elem3Pos = elem3.offsetTop

document.getElementById('scrollButtonTo3').onclick = function () {
   console.log('click')
  scrollTo(document.getElementById('container'), topPos-30, 600);
}

document.getElementById('scrollButtonTo3B').onclick = function () {
   console.log('click')
  scrollTo(document.getElementById('container'), elem3Pos-30, 600);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
