const STANDARD_FRAMERATE = 60;
const MAXIMUM_TARGET_FRAMERATE = 10000;

let actualFrameRateCounter = new ActualApproximateFrameRateCounter();
let targetFrameRateCounter = new TargetFrameRateCounter(STANDARD_FRAMERATE);

function setup() {
    console.log(60);
    createCanvas(640, 480);
}

function draw() {
    update();

    background(0, 0, 60);
    actualFrameRateCounter.draw();
    targetFrameRateCounter.draw();
}

function update() {
    actualFrameRateCounter.update();
    targetFrameRateCounter.update();
}

function keyReleased() {
    actualFrameRateCounter.toggle();

    return false;
}
