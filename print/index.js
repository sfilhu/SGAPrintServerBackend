// Serial
const SerialPort = require('serialport')

const print = (list) => {
    SerialPort.list().then( (ports) => {
        console.log(ports)
        const port = ports.filter(item => item.manufacturer != undefined)
        console.log(port)
        // if(port.length != 0){
        //     const printSerialPort = require('./print-serialport');
        //     const { path, comName } = port[0];
        //     const osPort = process.platform === 'darwin' ? comName : path
        //     await printSerialPort(list, osPort)
        // } else {
        //     const printUSB = require('./print-usb');
        //     await printUSB(list);
        //     return true
        // }
    })
};

module.exports = print;