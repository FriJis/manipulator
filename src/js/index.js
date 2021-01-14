import touch from './touch'
import '../scss/index.scss'
import sockIo from 'socket.io-client'
import pB from 'progressbar.js'
import { percent } from './helpers'

const pbConfig = ({ text }) => {
    return {
        strokeWidth: 12,
        trailColor: '#273147',
        easing: 'easeInOut',
        duration: 1,
        color: '#fcab0c',
        trailWidth: 12,
        svgStyle: null,
        step: (state, bar) => {
            bar.setText(`${text}:${Math.round(bar.value() * 100)}`);
        }
    }
}
const progZ = new pB.SemiCircle('#Z', pbConfig({ text: 'Z' }))
const progX = new pB.SemiCircle('#X', pbConfig({ text: 'X' }))
const progY = new pB.SemiCircle('#Y', pbConfig({ text: 'Y' }))


const io = sockIo(`ws://${process.env.HOST}:${process.env.PORT}`)

io.on('coord', ({ degX, degY, degZ }) => {
    progX.animate(percent(degX, 180) / 100)
    progZ.animate(percent(degZ, 180) / 100)
    progY.animate(percent(degY, 180) / 100)
})

const touchbar = document.querySelector('.touchbar')
new touch(touchbar).onscreen = (e) => {
    io.emit('touchbar', e)
}

const wheel = document.querySelector('.wheel')
new touch(wheel).onscreen = e => {
    io.emit('wheel', e)
}

const claw = document.querySelector('.claw')
new touch(claw).onscreen = e => {
    io.emit('claw', e)
}