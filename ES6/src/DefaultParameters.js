function registrarUsuario(name, country, mail, contact = 'none'){
    return `Name: ${name}, Country: ${country}, Mail: ${mail}, Contact: ${contact}`;
}

console.log(registrarUsuario('Milagros', 'Argentina', 'mail@gmail.com'));


//Destructuración de Arrays

const person = ['Monica', 25, 'Spain', 'College student'];
const [name, age, , profession] = person;

const showInfo = ( [name, , country, profession] = person) => console.log(name, country)

showInfo(person);

//Destructuración de Objectos

const user = {
    name: 'Agustina',
    age: 23,
    mail: 'mail@mail.com',
    country: 'Venezuela',
    profession: 'teacher'
}

const {name, country, profession} = user;

const showInfo = ( user ) => console.log(`${name} is a ${profession} who is from ${country}`);
showInfo (user);

//classes y herencias

class User {
    constructor(name, age){
        this.name = name,
        this.age = age;

    }
    
    showInfo() {
        return `
            Name: ${this.name} <br />
            Age: ${this.age} <br />
            <hr />
        `;
    }
}

const juanita = new User('Juanita', '25');
document.write(juanita.showInfo());

class Student extends User {
    constructor(name, age, career){
        super(name, age)
        this.career = career
    }
    
    showInfo() {
        return `
            Name: ${this.name} <br />
            Age: ${this.age} <br />
            Career: ${this.career} <br />
            <hr />
        `;
    }
}

const agustin = new Student('Agustin', '18', 'Arquitecto');
document.write(agustin.showInfo());

//Acortar objectos

const createObject = (animal, country) => {
    return {
        animal,
        country,
        showInfo (){
            return `There is a ${animal} in ${country}`;
        }
    }
}

console.log(createObject('shark', 'Mexico').showInfo());

//Parametros Rest y Spread

const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('Alejandro', 40, 'correo@coreo.com');

