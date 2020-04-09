// Serial
const SerialPort = require('serialport')

const print = async (list) => {
    await SerialPort.list().then( async (ports) => {
        //const port = await ports.filter(item => item.manufacturer != undefined)
        const printSerialPort = require('./print-serialport');
        const { path } = ports[0];
        
        await printSerialPort(list, path)
        
        // if(port.length != 0){
            
        // } else {
        //     const printUSB = require('./print-usb');
        //     await printUSB(list);
        //     return true
        // }
    })
};

module.exports = print;