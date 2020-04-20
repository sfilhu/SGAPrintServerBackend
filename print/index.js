// Serial
const SerialPort = require('serialport')

const print = (list) => {
    SerialPort.list().then( async (ports) => {
        const port = ports.filter(item => item.manufacturer != undefined) 

        if(port.length != 0){
            const printSerialPort = require('./print-serialport');
            const { path } = port[0];
            await printSerialPort(list, path)
        } else {
            const printUSB = require('./print-usb');
            await printUSB(list);
            return true
        }
    })
};

module.exports = print;