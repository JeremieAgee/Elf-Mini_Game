// Note: We need this for $ to work.
// Don't ask why!
$ = document.querySelector.bind(document);
// Select the main box from the HTML document.
box = $("main-box");
// *****************************************
// This sets the main box to red.
// *****************************************
function setRed() {

  // Set the style to red.
  box.style.color = "red";
}
redButton = $('#red-button');
redButton.onclick = setRed;



// *****************************************
// This sets the main box to green.
// *****************************************
function setGreen() {
  //window.alert("set green!")
  // Set the style to green.
  box.style.color = "green";
}
greenButton = $('#green-button');
greenButton.onclick = setGreen;


// *****************************************
// This sets the main box to blue.
// *****************************************
function setBlue() {
  //window.alert("set blue!")
  // Set the style to blue.
  box.style.color = "blue";
}
blueButton = $("#blue-button");
blueButton.onclick = setBlue;


// *****************************************
// This makes the elf turn left.
// *****************************************
// Selecting the elf sprite in document for multiple functions to use
elfSprite = $("#elf-sprite");
function setLeft() {

  elfSprite.src = "img/elf_left.png";

}
leftButton = $("#left-button");
leftButton.onclick = setLeft;

// *******************************************
// TODO: create a function to make the elf turn right
// When onclick occurs on the right button, invoke the
// function. 
// Be sure to add comments to your code!
// *******************************************
elfSprite = $("#elf-sprite");
function setRight() {

  elfSprite.src = "img/elf_right.png";

}
leftButton = $("#right-button");
leftButton.onclick = setRight;



// *******************************************
// TODO: create a function to make the elf turn up
// Create a button in HTML for the action.
// When onclick occurs on the up button, invoke the
// function.
// Be sure to add comments to your code!
// *******************************************

elfSprite = $("#elf-sprite");
function setUp() {

  elfSprite.src = "img/elf_up.png";

}
upButton = $("#up-button");
upButton.onclick = setUp;

// *******************************************
// TODO: create a function to make the elf turn down
// Create a button in HTML for the action.
// When onclick occurs on the down button, invoke the
// function.
// Be sure to add comments to your code!
// *******************************************


elfSprite = $("#elf-sprite");
function setDown() {

  elfSprite.src = "img/elf_down.png";

}
downButton = $("#down-button");
downButton.onclick = setDown;












// BONUS...
// This will tell us the position of the elf.
const state = {
  left: 200,
  top: 100
};
// Set the posistion of the elf in CSS.
box = $("#main-box");
box.style.left = state.left + "px";
box.style.top = state.top + "px";
document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowLeft") {
    elfSprite.src = "img/elf_left.png";
    if (state.left < 10) {
      state.left = 0;
    }
    else {
      state.left -= 10;
    }
    box.style.left = state.left + "px";
  }
  if (event.key == "ArrowRight") {
    elfSprite.src = "img/elf_right.png";
    if (state.left > 385) {
      state.left = 395;
    } else {
      state.left += 10;
    }
    box.style.left = state.left + "px";
  }
  if (event.key == "ArrowUp") {
    elfSprite.src = "img/elf_up.png";
    if (state.top < 10) {
      state.top = 0;
    } else {
      state.top -= 10;
    }
    box.style.top = state.top + "px";
  }
  if (event.key == "ArrowDown") {
    elfSprite.src = "img/elf_down.png";
    if (state.top > 385) {
      state.top = 395;
    } else {
      state.top += 10;
    }
    box.style.top = state.top + "px";
  }
});
cookie = $("#cookie-box");
const cookieState = {
  left: (Math.random() * 400),
  top: (Math.random() * 400),
};
cookie.style.left = cookieState.left + "px";
cookie.style.top = cookieState.top + "px";
hole = $("#hole-box");
const boxHole = {
  left: (Math.random() * 400),
  top: (Math.random() * 400),
};
function setBoxes() {
    boxHole.left = (Math.random() * 400);
    boxHole.top = (Math.random() * 400);
    cookieState.left = (Math.random() * 400);
    cookieState.top = (Math.random() * 400);
    cookie.style.left = cookieState.left + "px";
    cookie.style.top = cookieState.top + "px";
    hole.style.left = boxHole.left + "px";
    hole.style.top = boxHole.top + "px";
  if ((cookieState.left < state.left + 45 && cookieState.left + 45 > state.left && cookieState.top < state.top + 45 && cookieState.top + 45 > state.top)|| (boxHole.left < state.left + 45 && boxHole.left + 45 > state.left && boxHole.top < state.top + 45 && boxHole.top + 45 > state.top)){
    boxHole.left = (Math.random() * 400);
    boxHole.top = (Math.random() * 400);
    cookieState.left = (Math.random() * 400);
    cookieState.top = (Math.random() * 400);
    cookie.style.left = cookieState.left + "px";
    cookie.style.top = cookieState.top + "px";
    hole.style.left = boxHole.left + "px";
    hole.style.top = boxHole.top + "px";
  }
}
dead = false;
points = 0;
hole.style.left = boxHole.left + "px";
hole.style.top = boxHole.top + "px";
pPoints = $("#p-points");
pPoints.innerHTML = "Score = " + points;
function earnPoint(){
  if (cookieState.left < state.left + 45 && cookieState.left + 45 > state.left && cookieState.top < state.top + 45 && cookieState.top + 45 > state.top){
  points += 1;
  pPoints.innerHTML = "Score = " + points;
  console.log(points);
  setBoxes();
    
}
}

function lose(){
  if (boxHole.left < state.left + 45 && boxHole.left + 45 > state.left && boxHole.top < state.top + 45 && boxHole.top + 45 > state.top){
    alert("You lose! Your score was " + points);
    points = 0;
    pPoints.innerHTML = "Score = " + points;
    setBoxes();
    state.left = 200;
    state.top = 100;
    box.style.left = state.left + "px";
    box.style.top = state.top + "px";
    
  }
}

function time(){
  lose();
  earnPoint();
}
setInterval(time, 1);
// lose function working with bugs
// earnPoint function working with bugs