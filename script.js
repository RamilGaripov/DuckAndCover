const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 400;

let frame = 0;
let forExit = 0;
let gamespeed = 2;
let spacePressed = false;
let score = 0;

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
            ctx.font = "35px Georgia";
            ctx.fillStyle = "black";
            
            if (score < 5){
                ctx.fillText("You really are slow as a turtle! Your score is: " + score + ". Try again!", 50, canvas.height/4);
            } else if (score < 10) {
                ctx.fillText("Right in your turtle heart! Your score is: " + score + ". Not bad!", 50, canvas.height/4);
            } else {
                ctx.fillText("Wow! Your score is: " + score + ". Good turtle!", 50, canvas.height/4);
            };
            
            // alert("ded");
            return true;
        }
    }
}

// let fps, fpsInterval, startTime, now, then, elapsed;

function onLoad() {
    
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    drawEnemy(enemySprite, enemy.width * enemy.frameX, enemy.height * enemy.frameY, enemy.width, enemy.height, enemy.x, enemy.y, enemy.width, enemy.height);
    if (handleInjury()) return;
    requestAnimationFrame(onLoad);
    // drawBullet(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width*0.5, bullet.height*0.5, bullet.x, bullet.y, bullet.width, bullet.height);
    // drawBullet();
    
}

const scoreGradient = ctx.createLinearGradient(0, 0, 0, 70);
scoreGradient.addColorStop("0.4", "#fff");
// scoreGradient.addColorStop("0.5", "#000");
scoreGradient.addColorStop("0.6", "#aaffaa");
scoreGradient.addColorStop("0.7", "#aaffaa");
scoreGradient.addColorStop("0.9", "#505050");


function animate() {
    frame++;
    shootBullets();
    takeCover();
    exitCover();
    ctx.fillStyle = scoreGradient;
    ctx.font = "90px Georgia";
    
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    
    handleInjury();
   
    if (handleInjury()) return;
    requestAnimationFrame(animate);

    
}

onLoad();
function startGame() {
    document.getElementById("startgame").addEventListener("click", animate);
}
startGame();
// animate();
// startAnimating(24);

