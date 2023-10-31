import React from 'react'
import Sketch from 'react-p5'
import { useEffect } from 'react'

const RainSketch = () => {
  let rain = []
  // let rainingNow = true
  let bgcolor = '#111111'

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef)

    for (let i = 0; i < 205; i++) {
      rain[i] = new Rain(p5.random(50, p5.width), p5.random(0, -3000), p5)
    }
  }

  const draw = (p5) => {
    p5.background(bgcolor)

    // if (rainingNow) {
    for (let i = 0; i < rain.length; i++) {
      rain[i].dropRain()
      rain[i].splash()
    }
    // }
  }

  function Rain(x, y, p5) {
    this.x = x
    this.y = y
    this.length = 15
    this.r = 0
    this.opacity = 200

    this.dropRain = function () {
      p5.noStroke()
      p5.fill(255)
      p5.ellipse(this.x, this.y, 3, this.length)
      this.y = this.y + 6

      if (this.y > p5.height) {
        this.length = this.length - 5
      }

      if (this.length < 0) {
        this.length = 0
      }
    }

    this.splash = function () {
      p5.strokeWeight(2)
      p5.stroke(245, this.opacity)
      p5.noFill()

      if (this.y > p5.height) {
        p5.ellipse(this.x, p5.height - 10, this.r * 2, this.r / 2)
        this.r++
        this.opacity = this.opacity - 10

        if (this.opacity < 0) {
          this.y = p5.random(0, -100)
          this.length = 15
          this.r = 0
          this.opacity = 200
        }
      }
    }
  }

  return <Sketch setup={setup} draw={draw} />
}

export default RainSketch
