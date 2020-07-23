const _ = require ('lodash');
const argv = require ('yargs').argv;

console.log(argv.argv);
//let comando = process.argv[2];

if(argv.usuario === 'TV'){
        let a = {"name": "Alex"}
        let b = {"nickname": "Al"}
        let c = [
            { name: "Maria", surname: "Gonzales", age: 30},
            { name: "Juan", surname: "Alvarez", age: 40}
        ]
        //let result = _.assign(a,b);
        //console.log(result);

        //_.times(3, ()=> console.log('Miau'));

        let resultado = _.find(c, {name: "Maria"});
        console.log(resultado);    
}else{
    console.log('Usuario no valido');
}