const fs = require('fs');
const { error } = require('console');

console.log('Iniciado');

/*fs.readFile('data.txt','utf-8', (error, data) => {
    if(error){
        console.log(`Error ${error}`);
    }else{
        console.log(data);
    }
})

let data = fs.readFileSync('data.txt','utf8');
console.log(data);


fs.rename('data.txt', 'data-renamed.txt', (error) => {
    if(error) throw error;
    console.log('Renombrado');
});

fs.appendFile('data.txt', ', bicycle, circle, circus', (error) => {
    if (error) console.log(`Error ${error}`);
});

fs.unlink('data2.txt', (error) => {
    if (error) throw error;
    console.log('Eliminado');
});

fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

fs.readdir('./../../Basico', (files) => {
    files.forEach(file => {
        console.log(file);
    });
});*/

fs.readdirSync('./../../Basico/file_sistem').forEach (file =>{
    console.log(file);
});

console.log('Finalizado');