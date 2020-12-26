const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get(/\.js/, (req, res) => {
    res.sendFile(`${__dirname}/dist/${req.url}`)
})

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})
io.on('connection', (socket) => {
    socket.emit("hello", "Привет из Сокет-сервера");
});
http.listen(3000, () => {
    console.log('Сервер слушает порт 3000');

})
