const { Servo } = require('johnny-five')

let coordinates = {
    degZ: 90,
    degY: 0,
    degX: 90,
    degClaw: 0
}

const servosConfig = {
    // center: true
}

let servoZ = undefined
let servoY = undefined
let servoX = undefined
let servoClaw = undefined

const setCoordinateFromDelta = (c, delta) => {
    coordinates[c] += (delta / 5)
    if (coordinates[c] <= 0) coordinates[c] = 0
    if (coordinates[c] >= 180) coordinates[c] = 180
}

const init = () => {
    servoZ = new Servo({ pin: 2, ...servosConfig })
    servoY = new Servo({ pin: 3, ...servosConfig })
    servoX = new Servo({ pin: 4, ...servosConfig })
    servoClaw = new Servo({ pin: 5, ...servosConfig })
    move()
}

const move = () => {
    servoZ.to(coordinates.degZ)
    servoY.to(coordinates.degY)
    servoX.to(coordinates.degX)
    servoClaw.to(coordinates.degClaw)
}

module.exports = {
    init,
    setCoordinateFromDelta,
    move,
    coordinates
}