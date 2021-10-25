// a spring between two particles!

class Spring {
    constructor(a, b, k, rest_length, dampening) {
        this.a = a
        this.b = b
        this.k = k
        this.rest_length = rest_length
        this.dampen = dampening
    }

    // since each particle can update themselves, we don't need an update,
    // but we still need to be able to apply an elastic force on them!
    applyForce() {
        // We'll use Hooke's law, named after British physician Robert Hooke.
        // It says: "F = -kx", where F is the force, k is the spring
        // constant, and x is the displacement. The negative says "wherever
        // you pull me, I will go in the opposite direction!"
        let force = p5.Vector.sub(this.b.pos, this.a.pos)
        let x = force.mag() - this.rest_length
        force.normalize()
        force.mult(this.k*x)
        this.a.applyForce(force)
        force.mult(-1)
        this.b.applyForce(force)

        // dampen all of the vertices
        this.a.vel.mult(this.dampen)
        this.b.vel.mult(this.dampen)
    }

    // we should be able to see the spring
    show() {
        strokeWeight(1)
        stroke(0, 0, 100)
        line(
            this.a.pos.x,
            this.a.pos.y,
            this.b.pos.x,
            this.b.pos.y
        )
    }
}
