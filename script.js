var hero = document.getElementById("hero");
var enemy = document.getElementById("enemy");

function jump() {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    setTimeout(function () {
      hero.classList.remove("animate");
    }, 500);
  }
}

var checkDead = setInterval(function(){
    var heroTop = 
    parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    var enemyLeft = 
    parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
    if(enemyLeft<25 && enemyLeft>5 && heroTop>=130){
        alert("u lose.");
        enemy.style.animation = "none";
        block.style.display = "none";
        
    }
}, 10);


document.getElementById("restart").onclick = function restart() {
    location.href = "/";
};