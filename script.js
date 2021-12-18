var hero = document.getElementById("hero");
var bullet = document.getElementById("bullet");

function jump() {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    hero.classList.add("takecover");
    setTimeout(function () {
      hero.classList.remove("animate");
      hero.classList.remove("takecover");
    }, 5000);
  }
}

var checkDead = setInterval(function(){
    var heroTop = 
    parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var bulletLeft = 
    parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));
    if(bulletLeft<100 && bulletLeft>5 && heroTop<=100){
        alert("u lose.");
        bullet.style.animation = "none";
        block.style.display = "none";
        
    }
}, 10);


document.getElementById("restart").onclick = function restart() {
    location.href = "/";
};