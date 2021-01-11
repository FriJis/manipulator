const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
require('dotenv').config()
const { Board, Servo } = require("johnny-five");
const board = new Board({
    port: process.env.COM
});

const emitters = require('./server/socket/emitters')
const helpers = require('./server/helpers')


app.get(/\.(js|ttf|woff|woff|svg|eot|woff2|css)/, (req, res) => {
    res.sendFile(`${__dirname}/dist/${req.url}`)
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

board.on("ready", () => {
    console.log("Ready!");
    helpers.init()
    io.on('connection', (socket) => {
        console.log('conn');
        socket.on('touchbar', e => emitters.onTouchbar(e))
        socket.on('wheel', e => emitters.onWheel(e))
    });
    http.listen(process.env.PORT, process.env.HOST, () => {
        console.log(`Сервер слушает порт ${process.env.port}`);
    })
});

