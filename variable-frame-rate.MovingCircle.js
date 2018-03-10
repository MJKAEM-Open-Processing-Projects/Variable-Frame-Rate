/**
 * A moving circle that a revolution in approximately 6 seconds.
 */
class MovingCircle {
    constructor(centerPosition, revolutionRadius, radius) {
        this.degreeAngle = 0;
        this.centerPosition = centerPosition;
        this.revolutionRadius = revolutionRadius;
        this.radius = radius;
    }

    /**
     * Draw a revolving circle to the display.
     */
    draw() {
        angleMode(DEGREES);
        fill(255, 255, 255, 255);
        ellipse(
            this.centerPosition.x + (cos(this.getDegreeAngle()) * (this.radius * this.revolutionRadius)),
            this.centerPosition.y + (sin(this.getDegreeAngle()) * (this.radius * this.revolutionRadius)),
            this.radius * 2, this.radius * 2);
    }

    /**
     * Update the angle in degrees.
     */
    update() {
        this.degreeAngle += getUpdateUnit();

        while (this.degreeAngle >= 360) {
            this.degreeAngle -= 360;
        }
    }

    getDegreeAngle() {
        return this.degreeAngle;
    }
}
