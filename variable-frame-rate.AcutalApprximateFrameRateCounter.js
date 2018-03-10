/**
 * Displays the approximated frame rate on the lower right corner of the screen.
 */
class ActualApproximateFrameRateCounter {
    constructor(enabled = true) {
        this.enabled = enabled;
        this.approximateFrameRate = 0;
        this.framesBeforeNextUpdate = 0;
    }

    isEnabled() {
        return this.enabled;
    }

    getApproximateFrameRate() {
        return this.approximateFrameRate;
    }

    getFramesBeforeNextUpdate() {
        return this.framesBeforeNextUpdate;
    }

    /**
     * Draws the approximated frame rate to the lower right corner of the
     * screen.
     */
    draw() {
        if (this.isEnabled()) {
            textSize(12);
            fill(255, 255, 255, 255);
            text(this.getApproximateFrameRate().toFixed(0),
                width - textWidth(this.getApproximateFrameRate().toFixed(0)) - 5,
                height - 5);
        }
    }

    /**
     * Toggles the frame rate counter display on and off.
     */
    toggle() {
        const TILDE_KEYCODE = 192;

        if (keyCode == TILDE_KEYCODE) {
            this.enabled = !this.enabled;
        }
    }

    /**
     * Updates the approximate frame rate that is displayed.
     */
    update() {
        if (this.isEnabled()) {
            if (this.getFramesBeforeNextUpdate() >= 5) {
                this.approximateFrameRate = frameRate();
                this.framesBeforeNextUpdate = 0;
            }

            this.framesBeforeNextUpdate++;
        }
    }
}