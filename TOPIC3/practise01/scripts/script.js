var interval = 0;

function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';

  if (positionTop == 0) {
        //clearInterval(interval);

        //interval = setInterval(moveDown, 10);

        element.style.top = window.innerHeight - 200 + 'px';
  }
}

function myKeyDown(event) {
        //Clear existing intervals
        clearInterval(interval);
        if (event.keyCode == 37) {
                interval = setInterval(moveLeft, 10);
        }
        if (event.keyCode == 38) {
                interval = setInterval(moveUp, 10);
        }
        if (event.keyCode == 40) {
                interval = setInterval(moveDown, 10);
        }
        if (event.keyCode == 39) {
                interval = setInterval(moveRight, 10);
        }
}


function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';

  if (positionTop+200 == window.innerHeight) {
        //clearInterval(interval);
       // interval = setInterval(moveUp, 10);

       element.style.top = '0px';
  }
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';

  if (positionLeft == 0) {
       // clearInterval(interval);
       // interval = setInterval(moveRight, 10);

       element.style.left = window.innerWidth - 200 + 'px';
  }
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';

  if (positionLeft == window.innerWidth) {
        //clearInterval(interval);
       // interval = setInterval(moveLeft, 10);

       element.style.left = '-200px';
  }
}




document.addEventListener('DOMContentLoaded', myLoadEvent);