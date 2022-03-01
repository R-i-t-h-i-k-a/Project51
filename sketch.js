function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  createSprite(200,300,50,50);
  player = addImg("player.png");
}

function draw() {
  background(255,255,255); 
  drawSprites();
}