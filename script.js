const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;

let frame = 0;
let forExit = 0;
let gamespeed = 2;
let spacePressed = false;


const keys = [];

const player = {
    x: 20,
    y: 90,
    width: 175,
    height: 310,
    frameX: 0,
    frameY: 0,
    hitbox: true
    // moving: false
};

const playerSprite = new Image();
playerSprite.src = "./img/bubbles.png";

const background = new Image();
background.src = "./img/background.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e){
    if (e.code === 'Space') spacePressed = true;

});

function takeCover() {
    player.hitbox = false; 
    if (spacePressed && frame%3 === 0 && player.frameX < 4){
       
        player.frameX++;
        requestAnimationFrame(takeCover);
        forExit = frame;
    } 
}

function exitCover() {
    if (player.frameX >= 4 && frame-forExit > 30 && frame%5 === 0 && player.frameX < 8) {
        player.frameX++;
        requestAnimationFrame(takeCover);
    } else if (player.frameX == 8) {
        player.frameX = 0;
        player.hitbox = true;
        spacePressed = false;
        // clearInterval(timeout);
    }
}

let fps, fpsInterval, startTime, now, then, elapsed;

function onLoad() {
    requestAnimationFrame(onLoad);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
}

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate();
}
function animate() {
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);        
    }
    takeCover();
    exitCover();
    requestAnimationFrame(animate);
    frame++;
    // console.log(forExit);
}
onLoad();
startAnimating(24);

