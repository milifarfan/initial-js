const os = require('os');
const fs = require('fs');

const ex = require('./exports')

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

//console.log(ex.number);

ex.greet();
ex.numbers();
ex.bye();
/*let cpu_string = JSON.stringify(cpu);
fs.appendFile('asd.txt',`Información del cpu: ${cpu_string} `, function(error) {
    if(error){
        console.log('Error al crear el archivo');
    }
});*/

