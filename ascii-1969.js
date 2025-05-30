let img1969;
let inconsolata;
let chuoiKiTu1 = [
    "*",
    "        ",
    "         ",
    "người không thấy lại",,
    ".",
    "Tin gởi đi",
    "          ",
];

function preload() {
    img1969 = loadImage("images/post-office-1969.jpg");
    inconsolata = loadFont("font/Inconsolata-Light.ttf");
}

function setup() {
     createCanvas(windowWidth, windowHeight);
     noLoop();
};

function draw() {
    background(0);

    for (let i=0; i<img1969.width; i=i+1) {
        for (let j=0; j<img1969.height; j=j+1) {
            idx = (i*img1969.width + j) * 4;

            //Do sang trung binh cua hinh
            let r = img1969.pixels[idx];
            let g = img1969.pixels[idx + 1];
            let b = img1969.pixels[idx + 2];
            let avg = (r+g+b)/3;

            let charIndex1 = int(map(avg, 0, 255, 0, chuoiKiTu1.length));

            noStroke();
            textSize(10);
            textLeading(20);
            textAlign(TOP, LEFT);
            textFont(inconsolata);
            fill(r,g,b);
            text(char1, j*18, i*18);
        }
    }
    img1969.updatePixels();
}