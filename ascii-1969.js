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

    push();
        // background(0);
        fill("yellow");
        textSize(15);
        textFont(inconsolata);
        textLeading(23);
        noStroke();
        text("Con yêu quý của mẹ!\nVậy là đã tròn 2 năm con xa nhà,\nmẹ và các em vẫn mong nhớ con từng ngày.\nMấy ngày rồi, người ta nói ông Diệm\ncó lệnh chém những người làm cách mạng ở khắp Nam Kỳ.\nCon yêu của mẹ ơi, mẹ nén nỗi nhớ mỗi ngày\nđể cầu nguyện cho con được bình an.\nCon ơi, mẹ lo lắng,\nnhưng mẹ cũng tự hào lắm!\nMẹ vẫn đi khắp các sinh hoạt dân phố, đến chợ,\nngười ta nói con của mẹ đang cống hiến cho Tổ Quốc.\nCon đang đấu tranh tiêu diệt kẻ thù ác độc,\nvà rồi con và đồng đội sẽ mang bình yên đến cho đất nước mình.\nNhận được thư này, con an lòng con nhé,\nmẹ và các em ở nhà đợi tin con.", 50, 600);
    pop();
}