var char = document.getElementById("character");
var song = document.getElementById("song");



function start(){
    document.getElementById("container").style.display = "none";
    document.getElementById("knapp").style.display = "none";

    document.getElementById("game").style.display = "block";
    console.log("hej");
    document.getElementById("song").play();
}

function jump(){
    document.getElementById("bird-sound").play();
    var scoreBoard = document.getElementById("score");
    var char = document.getElementById("character");
    var topnumber = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
    var leftnumber = parseInt(window.getComputedStyle(char).getPropertyValue("left"));
    var randomY = Math.floor(((Math.random()*149)));
    var randomX = Math.floor(((Math.random()*450)));
    var deltaX = -(leftnumber - randomX);
    var deltaY = -(topnumber - randomY);
    console.log("x: " + deltaX + " y: " + deltaY);
    // uppdatera score
    // scoreBoard.innerText = randomX + " px " + randomY + " px";

    if(char.classList != "animate" && deltaX >= 0){
        
        char.style.setProperty('--randomX', deltaX + "px");
        char.style.setProperty('--randomY', deltaY + "px");
        char.classList.add("animate"); 
        setTimeout(function(){
            char.classList.remove("animate");
            char.style.left = randomX + "px";        
            char.style.top = randomY + "px";
                 
    }, 1000);
    }
    else if(char.classList != "animateBackwards" && deltaX < 0){
      
        char.style.setProperty('--randomX', deltaX + "px");
        char.style.setProperty('--randomY', deltaY + "px");
        char.classList.add("animateBackwards"); 
        setTimeout(function(){
            char.classList.remove("animateBackwards");
            char.style.left = randomX + "px";        
            char.style.top = randomY + "px";
                 
    }, 1000);
    }
};

