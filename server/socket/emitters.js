const { move, setCoordinateFromDelta } = require('../helpers')


const onTouchbar = (e) => {
    setCoordinateFromDelta('degZ', e.deltaY)
    move()
}

const onWheel = (e) => {
    setCoordinateFromDelta('degY', -e.deltaY)
    move()
}

module.exports = {
    onTouchbar,
    onWheel
}