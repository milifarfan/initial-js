"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//function registrarUsuario(name, country, mail, contact = 'none'){
//  return `Name: ${name}, Country: ${country}, Mail: ${mail}, Contact: ${contact}`;
//}
//console.log(registrarUsuario('Milagros', 'Argentina', 'mail@gmail.com'));
//Destructuración de Arrays
//const person = ['Monica', 25, 'Spain', 'College student'];
//const [name, age, , profession] = person;
//const showInfo = ( [name, , country, profession] = person) => console.log(name, country)
//showInfo(person);
//Destructuración de Objectos
//const user = {
//  name: 'Agustina',
//age: 23,
//mail: 'mail@mail.com',
//country: 'Venezuela',
//profession: 'teacher'
//}
//const {name, country, profession} = user;
//const showInfo = ( user ) => console.log(`${name} is a ${profession} who is from ${country}`);
//showInfo (user);
//classes y herencias
var User = /*#__PURE__*/function () {
  function User(name, age) {
    _classCallCheck(this, User);

    this.name = name, this.age = age;
  }

  _createClass(User, [{
    key: "showInfo",
    value: function showInfo() {
      return "\n            Name: ".concat(this.name, " <br />\n            Age: ").concat(this.age, " <br />\n            <hr />\n        ");
    }
  }]);

  return User;
}();

var juanita = new User('Juanita', '25');
document.write(juanita.showInfo());

var Student = /*#__PURE__*/function (_User) {
  _inherits(Student, _User);

  var _super = _createSuper(Student);

  function Student(name, age, career) {
    var _this;

    _classCallCheck(this, Student);

    _this = _super.call(this, name, age);
    _this.career = career;
    return _this;
  }

  _createClass(Student, [{
    key: "showInfo",
    value: function showInfo() {
      return "\n            Name: ".concat(this.name, " <br />\n            Age: ").concat(this.age, " <br />\n            Career: ").concat(this.career, " <br />\n            <hr />\n        ");
    }
  }]);

  return Student;
}(User);

var agustin = new Student('Agustin', '18', 'Arquitecto');
document.write(agustin.showInfo()); //Acortar objectos

var createObject = function createObject(animal, country) {
  return {
    animal: animal,
    country: country,
    showInfo: function showInfo() {
      return "There is a ".concat(animal, " in ").concat(country);
    }
  };
};

console.log(createObject('shark', 'Mexico').showInfo()); //Parametros Rest y Spread

var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
};

mostrarDatos('Alejandro', 40, 'correo@coreo.com');