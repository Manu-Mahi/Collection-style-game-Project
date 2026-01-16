// Move the catcher with the left and right arrow keys to catch the falling objects.

/* VARIABLES */
let catcher, fallingObject, badObject;
let score = 0;
let climberX = 500;
let climberY = 360;
let backgroundImg, flynn, lamp, bomb, catchers;

/* PRELOAD LOADS FILES */
function preload() {
  bkImg = loadImage("assets/bkImg.jpeg");
  flynn = loadImage("assets/flynn.png");
  lamp = loadImage("assets/lamp.png");
  bomb = loadImage("assets/bomb.png");
  catchers = loadImage("assets/catchers.png");
}

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(600, 400);

  // Resize images
  bkImg.resize(680, 0);
  flynn.resize(90, 0);
  lamp.resize(70, 0);
  bomb.resize(40, 0);
  catchers.resize(80, 0);

  // Create climber
  climber = new Sprite(flynn, climberX, climberY, 70, 20, "k");

  // Create catcher
  catcher = new Sprite(catchers, 300, 380, 80, 25, "k");
  catcher.color = color(95, 158, 160);

  // Create falling object
  fallingObject = new Sprite(lamp, 10, 0, 10);
  fallingObject.color = color(0, 128, 128);
  fallingObject.vel.y = 2;
  fallingObject.vel.x = 0;

  // Create bad object
  badObject = new Sprite(bomb, 100, 0, 10);
  badObject.color = color("black");
  badObject.vel.y = 2;
  badObject.vel.x = 0;
}

/* DRAW LOOP REPEATS */
function draw() {
  background("lightBlue");
  image(bkImg, 0, 0);

  // Reset velocities to ensure straight falling
  fallingObject.vel.x = 0;
  badObject.vel.x = 0;

  // Move catcher with arrow keys
  if (kb.pressing("left")) {
    catcher.vel.x = -3;
  } else if (kb.pressing("right")) {
    catcher.vel.x = 3;
  } else {
    catcher.vel.x = 0;
  }

  // Stop catcher at edges
  catcher.x = constrain(catcher.x, 50, 350);

  // Reset fallingObject if it reaches bottom
  if (fallingObject.y >= height) {
    fallingObject.y = -40;
    fallingObject.x = random(50, 350);
    fallingObject.vel.y = random(1, 5);
    score -= 1;
  }

  // Reset badObject if it reaches bottom
  if (badObject.y >= height) {
    badObject.y = -40;
    badObject.x = random(50, 350);
    badObject.vel.y = random(1, 5);
  }

  // Check collisions - ONLY ONCE
  if (fallingObject.collides(catcher)) {
    fallingObject.y = -40;
    fallingObject.x = random(50, 350);
    fallingObject.vel.y = random(2, 6);
    fallingObject.vel.x = 0;

    climberY -= 20;
    climber.pos = { x: climberX, y: climberY };

    score++;
  }

  if (badObject.collides(catcher)) {
    badObject.y = -40;
    badObject.x = random(50, 350);
    badObject.vel.y = random(2, 6);
    badObject.vel.x = 0;

    climberY += 20;
    climber.pos = { x: climberX, y: climberY };

    score--;
  }

  // Display score
  fill("white");
  textSize(30);
  text("HOPE POINTS: " + score, 35, 50);

  // Check if player won
  if (score >= 10) {
    youWin();
    if (mouseIsPressed) {
      restart();
    }
  }
}

/* FUNCTIONS */

// You Win Screen
function youWin() {
  background(255, 255, 153);

  // Move sprites offscreen
  catcher.pos = { x: 600, y: -300 };
  fallingObject.pos = { x: -100, y: 0 };
  badObject.pos = { x: -100, y: 0 };
  climber.pos = { x: -100, y: 0 };

  // Display messages
  textSize(30);
  fill("black");
  text("Great job sustaining HOPE!\nALWAYS STAY HOPEFUL!", width / 2 - 200, height / 2 - 30);
  textSize(15);
  text("Click the mouse anywhere to play again.", width / 2 - 160, height / 3);
}

// Restart game
function restart() {
  score = 0;

  catcher.pos = { x: 200, y: 380 };

  fallingObject.y = -40;
  fallingObject.x = random(50, 350);
  fallingObject.vel.y = random(1, 5);
  fallingObject.vel.x = 0;

  badObject.y = -40;
  badObject.x = random(50, 350);
  badObject.vel.y = random(1, 5);
  badObject.vel.x = 0;

  climberY = 360;
  climber.pos = { x: climberX, y: climberY };
}
