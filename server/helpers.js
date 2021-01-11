const { Servo } = require('johnny-five')

let coordinates = {
    degZ: 90,
    degY: 0,
    degX: 90
}


let servoZ = undefined
let servoY = undefined
let servoX = undefined

const setCoordinateFromDelta = (c, delta) => {
    coordinates[c] += (delta / 10)
    if(coordinates[c] <= 0) coordinates[c] = 0
    if(coordinates[c] >= 180) coordinates[c] = 180
}

const init = () => {
    servoZ = new Servo(2)
    servoY = new Servo(3)
    servoX = new Servo(4)
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