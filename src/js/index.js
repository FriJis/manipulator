import touch from './touch'
import parallax from './parallax'
import '../scss/index.scss'
import sockIo from 'socket.io-client'

// document.addEventListener('load', () => {
    console.log();
    const io = sockIo(`ws://${process.env.HOST}:${process.env.PORT}`)
    const touchbar = document.querySelector('.touchbar')
    new touch(touchbar).onscreen = (e) => {
        io.emit('touchbar', e)
    }
    new parallax(touchbar)

    const wheel = document.querySelector('.wheel')
    new touch(wheel).onscreen = e => {
        io.emit('wheel', e)
    }    
// })