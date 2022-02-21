const bulletArray = [];

const bulletImg = new Image();
bulletImg.src = "./img/bullet.png";

var speed = 15;

class Bullet {

    constructor() {
        this.x = 800;
        this.y = 220;
        this.width = 50;
        this.height = 30;
        speed++;
        this.counted = false;
    };

    drawBullet() {
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(bulletImg, this.x, this.y, this.width, this.height);
    }

    shoot() {
        this.x -= speed;
        if (!this.counted && this.x < player.x) {
            score++;
            this.counted = true;
           
        }
        this.drawBullet();
        // console.log(nextShot);
    }
}

let reloadSpeed = Math.floor(Math.random()*180 + 60);
var nextShot = 0;

function shootBullets() {
    
    if (frame === reloadSpeed || frame - nextShot > reloadSpeed){
        console.log(speed);
        bulletArray.unshift(new Bullet);
        nextShot = frame;
        console.log(bulletArray);
        
        reloadSpeed = Math.floor(Math.random()*180 + 60);

        // console.log(nextShot);
        
    }

    for (let i = 0; i < bulletArray.length; i++) {
            bulletArray[i].shoot(); 
    }
    

    if (bulletArray.length > 20){
        bulletArray.pop(bulletArray[0]);   
    }
}
