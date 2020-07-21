var cloud = document.getElementById("background");

var runningClouds = cloud.animate([
  { transform: "translate(-1000px, 100px)" },
  { transform: "translate(1000px, 100px)" },

],{
  duration: 5000,
  iterations: Infinity,

})

var plan = document.getElementById("plan-div");

var flying = plan.animate(
  [
    { transform: "translate(1500px, 400px)" },
    { transform: "translate(800px, 350px)" },

    { transform: "rotate(25deg)" },
    { transform: "translate(-1500px, -600px)" },
  ],
  {
    duration: 4000,
    iterations: Infinity,
  }
);

var flame =  document.getElementById("flame");

var flameShow = flame.animate([
  {transform : 'scale(0)'},
  {transform : 'scale(3)'},

],{
  duration: 20,
    iterations: Infinity,

});

flameShow.pause();


var shell = document.getElementById("shell");

var firing = shell.animate(
  [{ transform: "translate(0 , 0)" }, { transform: "translate(1500px , 0)" }],
  {
    duration: 200,
    iterations: Infinity,
  }
);

firing.pause();

let angle = 1;
var barrel = document.getElementById("gun-barrel");

function deg(event) {
  var dir = event.deltaY / Math.abs(event.deltaY);

  if (dir < 0) {
    ++angle;
  } else --angle;

  if (angle < 70 && angle > 0) {
    barrel.style.transform = `rotate(${-angle}deg) translate(0px ,0px)`;
  }
}

document.addEventListener("wheel", deg);
document.addEventListener("mousedown", function start() {
  firing.play();
  shell.style.backgroundColor = "black";
});
document.addEventListener("mousedown", function flameStart () {
  flameShow.play();
  flame.style.visibility = 'visible'; 

});
document.addEventListener("mouseup", function stop() {
  firing.pause();
  shell.style.backgroundColor = 'rgb(247, 247, 247)';
});
document.addEventListener("mouseup", function flameStop () {
  flameShow.pause();
  flame.style.visibility = 'hidden'; 

});

// function xyshell (){
//   let x = shell.getBoundingClientRect().x;
//   let y = shell.getBoundingClientRect().y;
//   let w = plan.getBoundingClientRect().x;
//   let h = plan.getBoundingClientRect().y;

//   if (w == x+20 && h == y ) {

//     console.log('hit')
//   }

// }

// setInterval(xyshell,2)
