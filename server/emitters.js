const { move, setCoordinateFromDelta, coordinates } = require('./helpers')


const touchbar = ({io}, e) => {
    setCoordinateFromDelta('degZ', -e.deltaY)
    setCoordinateFromDelta('degX', -e.deltaX)
    move()
    io.emit('coord', coordinates)
}

const wheel = ({io}, e) => {
    setCoordinateFromDelta('degY', -e.deltaY)
    move()
    io.emit('coord', coordinates)
}

const claw = ({io}, e) => {
    setCoordinateFromDelta('degClaw', -e.deltaX)
    move()
    io.emit('coord', coordinates)
}

module.exports = {
    touchbar,
    wheel,
    claw
}