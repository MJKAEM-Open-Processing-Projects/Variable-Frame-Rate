/**
 * Variable Frame Rate
 *
 * Tests the usage of an uncapped frame rate, where movement is not affected by
 * the frame rate.
 */

const STANDARD_FRAMERATE = 60;

let actualFrameRateCounter;
let targetFrameRateCounter;

let movingCircle;

function setup() {
    createCanvas(640, 480);

    actualFrameRateCounter = new ActualApproximateFrameRateCounter();
    targetFrameRateCounter = new TargetFrameRateCounter(STANDARD_FRAMERATE);

    movingCircle = new MovingCircle(createVector(width / 2, height / 2), 10, 20);
}

function draw() {
    update();

    background(0, 0, 64);
    actualFrameRateCounter.draw();
    targetFrameRateCounter.draw();

    movingCircle.draw();
}

function update() {
    actualFrameRateCounter.update();
    targetFrameRateCounter.update();

    movingCircle.update();
}

function keyReleased() {
    actualFrameRateCounter.toggle();

    return false;
}

function getUpdateUnit() {
    if (frameRate() == 0) {
        return 0;
    }
    return STANDARD_FRAMERATE / frameRate();
}
