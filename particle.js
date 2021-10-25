class Particle {
    constructor(x, y) {
        this.pos = new p5.Vector(x, y)
        this.vel = p5.Vector.random2D()
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

    // checks all the edges and bounces the particle
    checkEdges() {
        // right side
        if (this.pos.x + this.r > width) {
            this.pos.x = width - this.r
            this.vel.x *= -1
        }

        // left side
        if (this.pos.x - this.r < 0) {
            this.pos.x = this.r
            this.vel.x *= -1
        }

        // bottom side
        if (this.pos.y + this.r > height) {
            this.pos.y = height - this.r
            this.vel.y *= -1
        }

        // top side
        if (this.pos.y - this.r < 0) {
            this.pos.y = this.r
            this.vel.y *= -1
        }
    }
}
