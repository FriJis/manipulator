const { Servo } = require('johnny-five')

let coordinates = {
    degZ: 90,
    degY: 0,
    degX: 90
}

const servosConfig = {
    // center: true
}

let servoZ = undefined
let servoY = undefined
let servoX = undefined

const setCoordinateFromDelta = (c, delta) => {
    coordinates[c] += (delta / 5)
    if (coordinates[c] <= 0) coordinates[c] = 0
    if (coordinates[c] >= 180) coordinates[c] = 180
}

const init = () => {
    servoZ = new Servo({ pin: 2, ...servosConfig })
    servoY = new Servo({ pin: 3, ...servosConfig })
    servoX = new Servo({ pin: 4, ...servosConfig })
    move()
}

const move = () => {
    servoZ.to(coordinates.degZ)
    servoY.to(coordinates.degY)
    servoX.to(coordinates.degX)
}

module.exports = {
    init,
    setCoordinateFromDelta,
    move
}