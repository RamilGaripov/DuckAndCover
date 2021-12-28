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
    y: 100,
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
    // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    // ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e){
    if (e.code === 'Space') spacePressed = true;
    // player.y += 200;
});

function takeCover() {
    if (spacePressed && frame%2 === 0 && player.frameX < 4){
        player.frameX++;
        player.hitbox = false; 
        requestAnimationFrame(takeCover);
        forExit = frame;
    } 
}

function exitCover() {
    if (player.frameX >= 4 && frame-forExit > 20 && frame%2 === 0 && player.frameX < 8) {
        player.frameX++;
        requestAnimationFrame(takeCover);
    } else if (player.frameX == 8) {
        player.frameX = 0;
        player.hitbox = true;
        spacePressed = false;
        // player.y -= 200;
        // clearInterval(timeout);
    }
}

function handleInjury() {
    for (let i = 0; i < bulletArray.length; i++){
        if (bulletArray[i].x > 50 && bulletArray[i].x < 150 && player.hitbox){
            // ctx.font = "25px Georgia";
            // ctx.fillStyle = "black";
            // ctx.fillText("Right in the heart! Your score is: ");
            alert("ded");
            return true;
        }
    }
}

// let fps, fpsInterval, startTime, now, then, elapsed;

function onLoad() {
    requestAnimationFrame(onLoad);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    drawEnemy(enemySprite, enemy.width * enemy.frameX, enemy.height * enemy.frameY, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
    // drawBullet(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width*0.5, bullet.height*0.5, bullet.x, bullet.y, bullet.width, bullet.height);
    // drawBullet();
    
}

// function startAnimating(fps){
//     fpsInterval = 1000/fps;
//     then = Date.now();
//     startTime = then;
//     animate();
// }

// let position = 0;
function animate() {
    // now = Date.now();
    // elapsed = now - then;
    // if (elapsed > fpsInterval) {
    //     then = now - (elapsed % fpsInterval);        
    // }
    frame++;
    // let reloadSpeed = Math.floor(Math.random()*200 + 50);
    // if (frame%20 === 0)
    
    // console.log(reloadSpeed);
    // if (frame-reloadSpeed === 0)
    shootBullets();
    // console.log(frame);
    
    // if (frame === 100) {
    //     console.log("i shoot");
    //     shootBullet();
    //     // drawBullet(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width*0.5, bullet.height*0.5, bullet.x - bullet.speed*frame, bullet.y, bullet.width, bullet.height);
    // }

    takeCover();
    exitCover();
    handleInjury();
    
    
    // if ()
    
    requestAnimationFrame(animate);
}

onLoad();
animate();
// startAnimating(24);

