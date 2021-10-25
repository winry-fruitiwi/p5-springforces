/*
@author Winry
@date 2021-10-23

https://youtu.be/Rr-5HiXquhw
Daniel Shiffman's Coding Train: Coding Challenge #160: Spring Forces

let's simulate the oscillating motion of a spring using vectors and forces!

coding plan:
    particle class ➜ constructor, show, update, apply_force
		pos, vel, acc
		test using show, updating, and applying a force
	spring class ➜ constructor, update, show
		a, b, k, rest_length
		test by showing and updating
	multiple spring and particle arrays
	locked boolean for head to fix its position
	gravity

	bonuses:
	    make Adam a springy pendulum, maybe tie Samus's helmet to a
	    spring too.

 */
let font
let bob, anchor
let spring
let gravity

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // for (let i = 0; i < 2; i++) {
    //     bobs.push(new Particle(random(width), random(height)))
    // }
    gravity = new p5.Vector(0, 0.01)
    bob = new Particle(200, 200)
    anchor = new Particle(400, 300)
    spring = new Spring(bob, anchor, 0.01, 200, .96)
}

function draw() {
    background(209, 80, 30)
    // coming back soon!
    // for (let bob of bobs) {
    //     bob.show()
    //     // bob.applyForce(gravity)
    //     bob.update()
    //     bob.checkEdges()
    // }

    spring.applyForce()
    bob.update()
    anchor.update()
    bob.show()
    bob.checkEdges()

    anchor.show()
    anchor.checkEdges()

    spring.show()
}
