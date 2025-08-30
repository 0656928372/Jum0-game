let score = 0;
let highScore = 0;
var character = document.getElementById ("character");
var block = document.getElementById ("block");
function  jump(){
  character.classList.add("animation");
  setTimeout(function(){
      character.classList.remove ("animation");
  },500)
    score += 1 ;
  if(score > 5){
        block.style.animation = " block 3s infinite linear";
          
  } else if(score > 10){
     const  game = document.getElementById ("game");
     game.style.background = "#0000";
        block.style.animation = " block 2s infinite linear";
        
  }
  const  scoreDiv = document.getElementById ("score").innerText = score;
  
}
var chackDead = setInterval(function(){
  var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if(blockLeft <20 && blockLeft>0&& characterTop >= 130){
    block.style.animation = "none";
  alert("You loose 🤪🤪🤪!!");
   
    const  hScore = document.getElementById ("highScore").innerText  = score;
    window.location  = "index.html";
  }
},10);
var jumpBtb = document.getElementById ("jbtn").addEventListener("click",()=>{
  jump();
  return;
}
) 


const names = ["Amadoda","uwabona","Ngomubala" ,"🇮🇹"];

function print(){
      names.forEach((val, i)=>{
    const  name  = document.getElementById ("word");
    if (i > 1) {
      name.style.animation = "animateWord2 1s linear infinite";
    } else {
      name.style.animation = "animateWord 3s linear infinite";
    }
    name.innerText += val;
  }
)
}
  setTimeout(function(){
      print();
  },10);
  const button = document.getElementById ("sBtn").addEventListener("click",()=>{
    const nN =  prompt("choose where to share : facebook  : whatsApp ").value.trim();
    shareScore(nN);
  })
function shareScore(name){
     alert("Sharing to " + name );
     if (name === "facebook") {
     window.open("Facebook.com");
     } else {
     window.open("whatsApp.com");
     }
}