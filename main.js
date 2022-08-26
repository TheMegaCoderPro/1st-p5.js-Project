function preload() {
    img = loadImage('https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=600');
}

function setup() {
  createCanvas(750, 450);
}

function draw() {
  image(img, 100, 25 ,450 ,400);
  
  fill(0, 255, 255);
  stroke(0, 128, 0);
  circle(0, 0, 100);
  circle(750, 0, 100);
  circle(0, 430, 100);
  circle(750, 430, 100);
  fill(255, 0, 0);
  rect(100, 5, 450, 45);
  rect(100, 5, 45, 450);
  rect(100, 400, 450, 45);
  rect(550, 5, 45, 450);
}