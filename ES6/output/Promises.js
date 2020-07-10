"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve();
    } else {
      reject();
    }
  }, 4000);
});
promesa.then(function () {
  alert('Exito');
});
promesa["catch"](function () {
  alert('Sin exito');
});