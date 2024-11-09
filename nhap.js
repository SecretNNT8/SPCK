
// no resize logic integrated !

var circleSVG = document.querySelector("#svg");
gsap.set('#circleWrap, #svg', { xPercent: -50, yPercent: -50 })

MotionPathPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

var circlePath = document.querySelector("#circle");
const items = document.querySelectorAll('.item');


gsap.set(items, {
    motionPath: { // see 001
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        autoRotate: -90,
        end: i => i / items.length
    }
});

var action = gsap.timeline({ paused: true })
    .to('#circleWrap', { rotation: -360, transformOrigin: 'center', duration: 1, ease: 'none' })


// The start and end positions in terms of the page scroll
const startY = innerHeight / 10;
const finishDistance = innerHeight * 4;

// Listen to the scroll event
document.addEventListener("scroll", function () {
    // Prevent the update from happening too often (throttle the scroll event)
    if (!requestId) {
        requestId = requestAnimationFrame(update);
    }
});

update();

function update() {
    // Update our animation
    action.progress((scrollY - startY) / finishDistance);
    // gsap.set('#circleWrap', {rotation:-scrollY*0.2, transformOrigin:'center'})

    // Let the scroll event fire again
    requestId = null;
}


// 001 https://greensock.com/forums/topic/23014-invalid-position/?tab=comments#comment-108638