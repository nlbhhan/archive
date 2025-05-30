let img;
let inconsolata;
let chuoiKiTu1 = [
    "*",
    "          ",
    "."
];

function preload() {
    img = loadImage("images/post-office-1969.jpg");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
};

function setup() {
     createCanvas(700, 150*7);
     noLoop();
};

function draw() {
    background(0);
    img.loadPixels();

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j<img.width; j=j+1) {
            idx = (i*img.width + j) * 4;

            //Do sang trung binh cua hinh
            let r = img.pixels[idx];
            let g = img.pixels[idx + 1];
            let b = img.pixels[idx + 2];
            let avg = (r+g+b)/3;

            let charIndex1 = int(map(avg, 0, 255, 0, chuoiKiTu1.length));
            let char1 = chuoiKiTu1[charIndex1];

            noStroke();
            textSize(20);
            textLeading(20);
            textAlign(TOP, LEFT);
            textFont(inconsolata);
            fill(r,g,b);
            text(char1, j*7, i*7);
        }
    }
    img.updatePixels();
}