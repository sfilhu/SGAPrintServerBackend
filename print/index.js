// Serial
const SerialPort = require('serialport')

const print = (list) => {
    SerialPort.list().then( async (ports) => {
        const port = ports.filter(item => item.manufacturer != undefined) 

        if(port.length != 0){
            const printSerialPort = require('./print-serialport');
            const { path, comName } = port[0];
            const osPort = process.platform === 'darwin' ? comName : path
            await printSerialPort(list, osPort)
        } else {
            console.log('USB')
            const printUSB = require('./print-usb');
            await printUSB(list);
            return true
        }
    })
};

module.exports = print;