const STANDARD_FRAMERATE = 60;

let actualFrameRateCounter = new ActualApproximateFrameRateCounter();
let targetFrameRate = STANDARD_FRAMERATE;

function setup() {
    console.log(60);
    createCanvas(640, 480);
}

function draw() {
    update();

    background(0, 0, 60);
    actualFrameRateCounter.draw();
    textSize(144);
    text(targetFrameRate, (width / 2) - textWidth(frameRate() / 2), 200);
}

function update() {
    actualFrameRateCounter.update();

    if (keyIsDown(DOWN_ARROW)) {
        if (targetFrameRate > 1) {
            targetFrameRate--;
            frameRate(targetFrameRate);
        }
    }
    if (keyIsDown(UP_ARROW)) {
        targetFrameRate++;
        frameRate(targetFrameRate);
    }
}

function keyReleased() {
    actualFrameRateCounter.toggle();

    return false;
}
