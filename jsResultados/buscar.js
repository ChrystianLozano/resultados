function enlista() {
  console.log('Clicking');
  let matriculaID = document.getElementById('icon_prefix').value;
  console.log(matriculaID);
  let lobuscado = document.querySelector('#lobuscado');
  let elresultado = document.querySelector('#elresultado')
  lobuscado.innerHTML = matriculaID;

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
