let rule = 0;
let ruleset = [];
let line = [];
let new_line = [];

function setup() {
  createCanvas(400, 400);
  background(0);
  pixelDensity(1);
  init();
}

function draw() {
  loadPixels();
  let r = random(255);
  let g = random(255);
  let b = random(255);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      if (x == 0 || x == width - 1) {
        new_line[x] = 0;
      } else {
        new_line[x] = ruleset[line[x - 1] * 4 + line[x] * 2 + line[x + 1]];
      }

      let index = (x + y * width) * 4;
      pixels[index] = new_line[x] * r;
      pixels[index + 1] = new_line[x] * g;
      pixels[index + 2] = new_line[x] * b;
      pixels[index + 3] = 255;
    }

    line = new_line.slice();
  }
  updatePixels();

  noLoop();
}

function mousePressed() {
  init();
}

function init() {
  rule = (rule + 1) % 256;

  let copy = rule;
  for (let i = 0; i < 8; i += 1) {
    ruleset[i] = copy & 1;
    copy >>= 1;
  }

  for (let i = 0; i < width; i += 1) {
    line[i] = random([0, 1]);
  }

  line[width / 2] = 1;

  print(rule);
  draw();
}
