/* Initialize & Configure Variables */

// Iniatalize Variables
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");
const character = new Image();
const ctxHeight = 500;
const ctxWidth = 500;
const sheetWidth = 864;
const sheetHeight = 280;
const cols = 8;
const rows = 2;

var currentFrame = 0;
var frameCount = 0;
var playerX = 0;
var playerY = 0;
var isFacingRight = true;

var playerDirection;
var srcX;
var srxY;


// Initialize Variables dependant on above values.
var spriteWidth = sheetWidth /  cols;
var spriteHeight = sheetHeight / rows;

// Configure Objects from the first step.
canvas.height = ctxHeight;
canvas.width = ctxWidth;

character.src = "media/character.png";


/* Helper Functions */


// Alters index for next frame in character.png 
function updateFrame() {
    currentFrame = ++currentFrame % cols;

    srcX = currentFrame * spriteWidth;
    isFacingRight ? playerDirection = 0 : playerDirection = 1; 
    srcY = playerDirection * spriteHeight;
}

// Draws single frame for sprite.
function drawSprite() {
    ctx.clearRect(0, 0, ctxWidth, ctxHeight);
    updateFrame();
    ctx.drawImage(character, srcX, srcY, spriteWidth, spriteHeight, playerX, playerY, spriteWidth, spriteWidth);

    // requestAnimationFrame(drawSprite)
}

// Adjust row = 0 for function updateFrame()
function playerMoveRight() {
    isFacingRight = true
}

// Adjust row = 1 for function updateFrame()
function playerMoveLeft() {
    isFacingRight = false
}


/* Animation Loop */
setInterval(() => {
    drawSprite()
}, 100);

// requestAnimationFrame(drawSprite)