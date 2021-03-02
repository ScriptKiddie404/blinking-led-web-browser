const express = require('express');
const app = express();
const expressPort = 3000;


// Serial port comm

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// Read the port data
port.on("open", () => {
    console.log('Serial communication is being started.');
});
parser.on('data', data => {
    console.log(data);
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile('public/index.html');
});

app.post('/', (req, res) => {
    console.log(req.body);
    port.write(req.body.led, err => {
    });
});

app.listen(expressPort, () => { console.log("Listening on port 3000") });
