let img;
// let chuoiKiTu = "     .:░▒▓█";
let chuoiKiTu = "___________#################";

function preload() {
    img = loadImage("images/post-office-1930.jpg");
}

function setup() {
    createCanvas(396, 306);
    rectMode(CENTER);
    noLoop();
}

function draw() {
    background(0);
    // image(img, width/2, height/2);
    img.loadPixels();

    for (let i=0; i<img.height; i=i+1) {
        for (let j=0; j<img.width; j=j+1) {
            idx = (i*img.width+j) *4;

            //Do sang trung binh cua hinh
            let r = img.pixels[idx];
            let g = img.pixels[idx + 1];
            let b = img.pixels[idx + 2];
            let avg = (r+g+b)/3

            //Hien thi pixels theo do sang cua hinh
            let charIndex = int(map(avg, 0, 255, 0, chuoiKiTu.length));
            let char = chuoiKiTu[charIndex];

            noStroke();
            fill(r + 50, g + 30, b - 90);
            text(char, j*6, i*6);

        }
    }

}