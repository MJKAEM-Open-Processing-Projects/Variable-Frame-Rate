class TargetFrameRateCounter {
    constructor(targetFrameRate = STANDARD_FRAMERATE) {
        this.targetFrameRate = targetFrameRate;
    }

    /**
     * Draws the target frame rate to the display.
     */
    draw() {
        textSize(144);
        fill(255, 255, 255, 128);
        text(this.getTargetFrameRate().toFixed(0),
            (width / 2) - (textWidth(this.getTargetFrameRate().toFixed(0)) / 2),
            (height / 2) + (textSize() / 4));
    }

    /**
     * Checks if the up or down arrow is pressed and changes the target
     * frame rate.
     */
    update() {
        if (keyIsDown(DOWN_ARROW)) {
            if (this.getTargetFrameRate() > 1) {
                this.targetFrameRate--;
                frameRate(this.getTargetFrameRate());
            }
        }
        if (keyIsDown(UP_ARROW)) {
            if (this.getTargetFrameRate() < MAXIMUM_TARGET_FRAMERATE) {
                this.targetFrameRate++;
                frameRate(this.getTargetFrameRate());
            }
        }
    }

    getTargetFrameRate() {
        return this.targetFrameRate;
    }
}
