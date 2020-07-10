"use strict";

var names = ['Ana', 'Lola', 'Lenny'];
var num_characters = names.map(function (name) {
  return "".concat(name, " has ").concat(name.length, " letters");
});
console.log(num_characters); //(parametro) => {
//  return
//}
//const num_characters = names.map(function(name){
//  return `${name} has ${name.length} letters`;
//});