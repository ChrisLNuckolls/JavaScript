//<reference path="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" />
var ninja = {
    speed: 256
};

var alien = {};

var aliensCaught = 0;

var keysDown = {};


document.addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
    //stop keys from scrolling browser window
    e.preventDefault();
});

document.addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
    //stop keys from scrolling browser window
    e.preventDefault();
});

var gameboard = document.getElementById("gameboard");
var score = document.getElementById('score');

var alienElement = document.getElementById("alien");
alienElement.style.display = "inline-block";
alienElement.style.position = "absolute";

var reload =

    function () {
        alien.x = 32 + (Math.random() * (gameboard.offsetWidth - 64));
        alien.y = 32 + (Math.random() * (gameboard.offsetHeight - 64));

        alienElement.style.top = alien.y + "px";
        alienElement.style.left = alien.x + "px";

        score.textContent = aliensCaught;
    }


var ninjaElement = document.getElementById("ninja");
var set = function () {
    ninja.x = gameboard.offsetWidth / 2;
    ninja.y = gameboard.offsetHeight / 2;
    ninjaElement.style.top = ninja.y + "px";
    ninjaElement.style.left = ninja.x + "px";
    reload();
}


var update = function (modifier) {
    if (37 in keysDown) {//left
        ninja.x -= ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(1)";
    }
    if (38 in keysDown) {//up
        ninja.y -= ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }

    if (39 in keysDown) {//right
        ninja.x += ninja.speed * modifier;
        ninjaElement.style.left = ninja.x + "px";
        ninjaElement.style.transform = "scaleX(-1)";
    }

    if (40 in keysDown) {//down
        ninja.y += ninja.speed * modifier;
        ninjaElement.style.top = ninja.y + "px";
    }

    if (ninja.x <= (alien.x + 32) && alien.x <= (ninja.x + 32) && ninja.y <= (alien.y + 32) && alien.y <= (ninja.y + 32)) {
        ++aliensCaught;
        //explodeImage();
        reload();
    }
}

var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);

    then = now;

    requestAnimationFrame(main);
}

var then = Date.now();
set();
main();

//img explode:
var $target = $("#alien");

function explodeImage() {

    $target.explodeRestore();

    setTimeout(function () {

        $target.explode({

            maxWidth: 15,

            minWidth: 5,

            radius: 231,

            release: false,

            recycle: false,

            explodeTime: 320,

            canvas: true,

            round: false,

            maxAngle: 360,

            gravity: 10,

            groundDistance: 150,

        });

    }, 300)

}

