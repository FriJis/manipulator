const { Servo } = require('johnny-five')

let coordinates = {
    degZ: 90,
    degY: 0,
    degX: 90
}


let servoZ = undefined
let servoY = undefined

const setCoordinateFromDelta = (c, delta) => {
    coordinates[c] += (delta / 10)
}

const init = () => {
    servoZ = new Servo(2)
    servoY = new Servo(3)
    move()
}

const move = () => {
    servoZ.to(coordinates.degZ)
    servoY.to(coordinates.degY)
}

module.exports = {
    init,
    setCoordinateFromDelta,
    move
}