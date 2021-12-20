var hero = document.getElementById("hero");
var bullet = document.getElementById("bullet");

var score = document.getElementById("score");
i = 0;
function duck() {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    hero.classList.add("takecover");
    enemy.classList.add("adjustEnemy");
    bullet.classList.add("adjustBullet");
    
    setTimeout(function () {
      hero.classList.remove("animate");
      hero.classList.remove("takecover");
      enemy.classList.remove("adjustEnemy");
      bullet.classList.remove("adjustBullet");
    }, 500);
  }
}


window.addEventListener("keydown", checkTriggerPull, false);

function reloadSpeed () {
  var speed = Math.random()*1000 + 700;
  console.log(speed);
  return speed;
  
}; 


// x = 1000;
setInterval(shoot, reloadSpeed());

function shoot() {
  
  if (bullet.classList != "shoot") {
    var rand = Math.round(Math.random() + (1700 - 700)) + 700;
    bullet.classList.add("shoot");

    setTimeout(function () {
      bullet.classList.remove("shoot");
    }, rand);
    i++;
  }

}
function checkTriggerPull(key){
  if (key.keyCode == "49") {
    shoot();
  }
}


var checkDead = setInterval(function(){
    var heroTop = 
    parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var bulletLeft = 
    parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
    if(bulletLeft<100 && bulletLeft>5 && heroTop<=100){
        alert(`Right in your turtle heart! Your score is: ${i}`);
        bullet.style.animation = "none";
        block.style.display = "none";
        
    } else {
      score.innerHTML = `Score: ${i}`
    }
}, 10);


document.getElementById("restart").onclick = function restart() {
    location.href = "/";
};