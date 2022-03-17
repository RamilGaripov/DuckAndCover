const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 1200;
canvas.height = 400;

let frame = 0;
let forExit = 0;
let gamespeed = 2;
let spacePressed = false;
let score = 0;

// const keys = [];

const player = {
  x: 20,
  y: 100,
  width: 175,
  height: 310,
  frameX: 0,
  frameY: 0,
  hitbox: true,
  // moving: false
};

const playerSprite = new Image();
playerSprite.src = "./img/bubbles.png";

const background = new Image();
background.src = "./img/background1.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
  // ctx.fillRect(player.x, player.y, player.width, player.height);
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacePressed = true;
  // player.y += 200;
});

function takeCover() {
  if (spacePressed && frame % 2 === 0 && player.frameX < 4) {
    player.frameX++;
    player.hitbox = false;
    // requestAnimationFrame(takeCover);
    forExit = frame;
  }
}

function exitCover() {
  if (
    player.frameX >= 4 &&
    frame - forExit > 20 &&
    frame % 2 === 0 &&
    player.frameX < 8
  ) {
    player.frameX++;
    // requestAnimationFrame(takeCover);
  } else if (player.frameX == 8) {
    player.frameX = 0;
    player.hitbox = true;
    spacePressed = false;
    // player.y -= 200;
    // clearInterval(timeout);
  }
}

function handleInjury() {
  for (let i = 0; i < bulletArray.length; i++) {
    if (bulletArray[i].x > 50 && bulletArray[i].x < 150 && player.hitbox) {
      ctx.font = "35px Georgia";

      ctx.fillStyle = "#a0d2eb";

      if (score < 5) {
        ctx.fillText(
          "You are slow as a turtle! Your score is: " + score + ". Try again!",
          150,
          canvas.height / 4
        );
      } else if (score < 10) {
        ctx.fillText(
          "Right in your turtle heart! Your score is: " + score + ". Not bad!",
          150,
          canvas.height / 4
        );
      } else if (score < 15) {
        ctx.fillText(
          "Wow, you are a ninja turtle!! Your score is: " + score + ".",
          150,
          canvas.height / 4
        );
      }

      // alert("ded");
      return true;
    }
  }
}

let startButton = document.createElement("button");
startButton.setAttribute("class", "btn btn-info");
startButton.setAttribute("id", "startGame");
startButton.innerHTML = "Start Game";
document.getElementById("startButtonHere").appendChild(startButton);

// let fps, fpsInterval, startTime, now, then, elapsed;

function onLoad() {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  drawSprite(
    playerSprite,
    player.width * player.frameX,
    player.height * player.frameY,
    player.width,
    player.height,
    player.x,
    player.y,
    player.width,
    player.height
  );
  drawEnemy(
    enemySprite,
    enemy.width * enemy.frameX,
    enemy.height * enemy.frameY,
    enemy.width,
    enemy.height,
    enemy.x,
    enemy.y,
    enemy.width,
    enemy.height
  );
  if (handleInjury()) return;
  requestAnimationFrame(onLoad);
  // drawBullet(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width*0.5, bullet.height*0.5, bullet.x, bullet.y, bullet.width, bullet.height);
  // drawBullet();
}
// rgb(235, 209, 54)
const scoreGradient = ctx.createLinearGradient(0, 0, 0, 70);
scoreGradient.addColorStop("0.4", "rgb(235, 235, 56)");
// scoreGradient.addColorStop("0.5", "#000");
scoreGradient.addColorStop("0.6", "rgb(235, 209, 54)");
scoreGradient.addColorStop("0.7", "rgb(235, 209, 54)");
scoreGradient.addColorStop("0.9", "rgb(186, 134, 56)");

// function animate() {
//     frame++;
//     // console.log(frame);
//     shootBullets();
//     takeCover();
//     exitCover();
//     ctx.fillStyle = scoreGradient;
//     ctx.font = "90px Georgia";

//     ctx.strokeText(score, 560, 70);
//     ctx.fillText(score, 560, 70);

//     handleInjury();

//     if (handleInjury()) return;
//     requestAnimationFrame(animate);
// }

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    shootBullets();
    takeCover();
    exitCover();
    ctx.fillStyle = scoreGradient;
    ctx.font = "90px Georgia";

    ctx.strokeText(score, 560, 70);
    ctx.fillText(score, 560, 70);

    handleInjury();
    if (handleInjury()) return;

  }
}


startButton.addEventListener("click", startAnimating(24));
onLoad();

//   document.getElementById("startGame").addEventListener("click", startAnimating(24));

// startGame();
// animate();
// startAnimating(24);
