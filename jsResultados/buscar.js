function enlista() {
  console.log('Clicking');
  let matriculaID = document.getElementById('icon_prefix').value;
  console.log(matriculaID);
  let lobuscado = document.querySelector('#lobuscado');
  let elresultado = document.querySelector('#elresultado')
  lobuscado.innerHTML = matriculaID;
  if (unidad.value == 1){
    console.log(unidad.value);
    console.log('prepa matutina');
    validarMatricula(matriculaID);
  }
  if (unidad.value == 2){
    console.log(unidad.value);
    console.log('prepa VESPERTINA');
    validarMatricula(matriculaID);
  }
  if (unidad.value == 3){
    console.log(unidad.value);
    console.log(' UNIVERSIDAD ESCOLARIZADA');
    validarMatricula(matriculaID);
  }
  if (unidad.value == 4){
    console.log(unidad.value);
    console.log('UNIVERSIDAD MIXTA');
    validarMatricula(matriculaID);
  }

}

function validarMatricula(matriculaID) {
  if (matriculaID.length > 1 && matriculaID.length < 8 ) {
    elresultado.innerHTML = 'La matrícula debe de tener 8 dígitos';
  }
  if (matriculaID.length === 0){
    elresultado.innerHTML = 'Es necesario que Introduzca una matrícula valida';
  }
  if (matriculaID.length > 8){
    elresultado.innerHTML = 'La matrícula solo debe de tener 8 dígitos';
  }
  if (matriculaID.length === 8){
    elresultado.innerHTML = 'ok';
  }

}
