class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.vel = new p5.Vector()
        this.acc = new p5.Vector()
        // controls the radius
        this.r = 30
    }

    // displays the particle as a dot
    show() {
        fill(180, 70, 80)
        noStroke()
        circle(this.pos.x, this.pos.y, this.r)
    }

    // updates the velocity and acceleration
    update() {
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.mult(0)
    }

    // uses F=ma where m = 1 to apply a force
    applyForce(force) {
        this.acc.add(force)
    }
}
