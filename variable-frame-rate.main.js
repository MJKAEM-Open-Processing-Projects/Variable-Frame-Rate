const STANDARD_FRAMERATE = 60;
const MAXIMUM_TARGET_FRAMERATE = 10000;

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
    fill(255, 255, 255, 128);
    text(targetFrameRate.toFixed(0),
        (width / 2) - (textWidth(targetFrameRate.toFixed(0)) / 2),
        (height / 2) + (textSize() / 4));
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
        if (targetFrameRate < MAXIMUM_TARGET_FRAMERATE) {
            targetFrameRate++;
            frameRate(targetFrameRate);
        }
    }
}

function keyReleased() {
    actualFrameRateCounter.toggle();

    return false;
}
