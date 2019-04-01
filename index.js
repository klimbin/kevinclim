// set scroll height to very top on page load
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

let leftArm = document.getElementById('leftArm');
let rightArm = document.getElementById('rightArm');
let leftLeg = document.getElementById('leftLeg');
let rightLeg = document.getElementById('rightLeg');

let scrollStop = function (callback) {
	let isScrolling;
  let lastScrollY = 0;
  let stickman = document.getElementById('stickman');

	// Listen for scroll events
	window.addEventListener('scroll', function (event) {
		// Clear our timeout throughout the scroll
		window.clearTimeout(isScrolling);

    if(lastScrollY > window.scrollY) {
      // run left
      stickman.style.webkitTransform = "rotateY(180deg)";
    }
    else {
      // run right
      stickman.style.webkitTransform = "rotateY(0deg)";
    }
    lastScrollY = window.scrollY;
    walk();

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function() {

			// Run the callback
			callback();

		}, 66);

	}, false);

};

let stopWalk = () => {
  leftArm.style.webkitAnimationPlayState = 'paused';
  rightArm.style.webkitAnimationPlayState = 'paused';
  leftLeg.style.webkitAnimationPlayState = 'paused';
  rightLeg.style.webkitAnimationPlayState = 'paused';
}

let walk = () => {
  leftArm.style.webkitAnimationPlayState = 'running';
  rightArm.style.webkitAnimationPlayState = 'running';
  leftLeg.style.webkitAnimationPlayState = 'running';
  rightLeg.style.webkitAnimationPlayState = 'running';
}

stopWalk();
scrollStop(stopWalk);
