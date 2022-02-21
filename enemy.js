const enemy = {
    x: 820,
    y: 100,
    width: 344,
    height: 293,
    frameX: 0,
    frameY: 0,
    // hitbox: true
    // moving: false
};

const enemySprite = new Image();
enemySprite.src = "./img/flint.png";

function drawEnemy(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
    // ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};
