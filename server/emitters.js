const { move, setCoordinateFromDelta } = require('./helpers')


const touchbar = (e) => {
    setCoordinateFromDelta('degZ', -e.deltaY)
    setCoordinateFromDelta('degX', -e.deltaX)
    move()
}

const wheel = (e) => {
    setCoordinateFromDelta('degY', -e.deltaY)
    move()
}

module.exports = {
    touchbar,
    wheel
}