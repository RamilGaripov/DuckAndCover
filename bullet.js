const bulletArray = [];

var speed = 15;

const bulletImg = new Image();
bulletImg.src = "./img/bullet.png";

class Bullet {
    constructor() {
        this.x = 600;
        this.y = 220;
        this.width = 50;
        this.height = 30;
        this.speed = 15;
        this.counted = false;
        
    };

    drawBullet() {
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(bulletImg, this.x, this.y, this.width, this.height);
    }

    shoot() {
        this.x -= this.speed;
        if (!this.counted && this.x < player.x) {
            score++;
            this.counted = true;
        }
        this.drawBullet();
        // console.log(nextShot);
    }
}

let reloadSpeed = Math.floor(Math.random()*180 + 70);
var nextShot = 0;

function shootBullets() {
    
    if (frame === reloadSpeed || frame - nextShot > reloadSpeed){
        // console.log(reloadSpeed);
        bulletArray.unshift(new Bullet);
        nextShot = frame;
        reloadSpeed = Math.floor(Math.random()*180 + 70);
        
        // console.log("speed is " + this.speed);
        
        
        // console.log(nextShot);
        
    }
    for (let i = 0; i < bulletArray.length; i++) {
        bulletArray[i].shoot();
        
        
    }
    if (bulletArray.length > 20){
        bulletArray.pop(bulletArray[0]);   
    }
}

// const bullet = {
//     x: 600,
//     y: 215,
//     width: 70,
//     height: 35,
//     frameX: 0,
//     frameY: 0,
//     speed: 10
//     // hitbox: true
//     // moving: false
// };



// function drawBullet(img, sX, sY, sW, sH, dX, dY, dW, dH) {
//     // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
//     // ctx.fillRect(player.x, player.y, player.width, player.height);
//     ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
// };

// function shootBullet(){
//     bullet.x -= speed;
// }
// // function shootBullet(){
// //     drawBullet(bulletSprite, bullet.width * bullet.frameX, bullet.height * bullet.frameY, bullet.width*0.5, bullet.height*0.5, bullet.x - this.speed, bullet.y, bullet.width, bullet.height);
// // };

