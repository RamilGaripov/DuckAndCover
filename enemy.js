const enemy = {
    x: 620,
    y: 90,
    width: 375,
    height: 310,
    frameX: 0,
    frameY: 0,
    // hitbox: true
    // moving: false
};

const enemySprite = new Image();
enemySprite.src = "./img/flint.png";

function drawEnemy(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    // ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

const bullet = {
    x: 600,
    y: 280,
    width: 70,
    height: 35,
    frameX: 0,
    frameY: 0,
    speed: 15
    // hitbox: true
    // moving: false
};

const bulletSprite = new Image();
bulletSprite.src = "./img/bullet.png";

function drawBullet(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    // ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

// function shootBullet(){
//     drawBullet(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width*0.5, bullet.height*0.5, bullet.x - this.speed, bullet.y, bullet.width, bullet.height);
// };