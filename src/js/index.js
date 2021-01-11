import touch from './touch'
import '../scss/index.scss'
import sockIo from 'socket.io-client'

const io = sockIo('ws://192.168.0.106')


const touchbar = new touch(document.querySelector('.touchbar'))

touchbar.onscreen = (e) => {
    io.emit('touchbar', e)
}

const wheel = new touch(document.querySelector('.wheel'))

wheel.onscreen = e => {
    io.emit('wheel', e)
}
