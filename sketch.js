let shapes = [];
let song;
let amp;

function preload() {
  song = loadSound('midnight-quirk-255361.mp3'); // 載入背景音樂
}

function setup() {  
  createCanvas(windowWidth, windowHeight); //建立全屏畫布
  song.play(); // 播放音樂
  amp = new p5.Amplitude(); // 創建振幅分析器
  for (let i = 0; i < 50; i++) {
    shapes.push(new Shape(random(width), random(height), random(0.5, 2), color(random(255), random(255), random(255))));
  }
}

function draw() {  //畫圖
  background("#bde0fe"); //背景顏色

  // 顯示滑鼠的位置
  fill(0); //填充顏色
  text("("+mouseX+", "+mouseY+")", mouseX, mouseY); //顯示滑鼠的位置
  
  // 顯示畫布的寬和高
  fill(0); //填充顏色
  text("width: "+width+", height: "+height, 10, 20); //顯示畫布的寬和高

  // 顯示滑鼠的按鍵
  fill(0); //填充顏色
  text("mouseIsPressed: "+mouseIsPressed, 10, 40); //顯示滑鼠的按鍵

  // 顯示滑鼠的按鍵

  // 移動並顯示圖案
  for (let shape of shapes) {
    shape.move();
    shape.display();
  }
}

class Shape {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
    this.points = [[-3, 5], [3, 7], [1, 5],[2,4],[4,3],[5,2],[6,2],[8,4],[8,-1],[6,0],[0,-3],[2,-6],[-2,-3],[-4,-2],[-5,-1],[-6,1],[-6,2]];
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // 確保圖案在畫布內
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
  }

  display() {
    stroke(3);
    fill(this.col);
    beginShape();
    for (let point of this.points) {
      vertex(this.x + point[0] * 10 * this.size, this.y + point[1] * 10 * this.size);
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當窗口大小改變時，調整畫布大小
}

