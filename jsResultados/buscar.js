function enlista() {
  console.log('Clicking');
  let matriculaID = document.getElementById('icon_prefix').value;
  let lobuscado = document.querySelector('#lobuscado');
  let elresultado = document.querySelector('#elresultado')
  lobuscado.innerHTML = matriculaID;
  elresultado.innerHTML = `<div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`;
  if (unidad.value == 1){
    const idUrl = '1JcgcsYXEDuaRSzEVquN3EPibYc7bo0n5Mg9I5sBDy8I';
    validarMatricula(matriculaID, idUrl);
  }
  if (unidad.value == 2){
    const idUrl = '1ozESOG_vqhE3LuXTMDKvtPiHB0oXqa4Ey6nNK2_9LZ0'
    validarMatricula(matriculaID, idUrl);
  }
  if (unidad.value == 3){
    const idUrl = '110bJ76KL7ufcu8Vor5BCcymWpX85zJQnpz5qSQpUPxA'
    validarMatricula(matriculaID, idUrl);
  }
  if (unidad.value == 4){
    const idUrl = '1imqj0vgkt4YuYpZpa58SpCM0AipphSJTeENljz3CPbU'
    validarMatricula(matriculaID, idUrl);
  }

}

function validarMatricula(matriculaID, idUrl) {
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
    elresultado.innerHTML = `  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>`;
    const url = "https://spreadsheets.google.com/feeds/list/"+idUrl+"/od6/public/values?alt=json";
    console.log(url);
    (async function busqueda(){
      const response = await fetch(url);
      const data = await response.json();
      let entry = data.feed.entry;
      let salida;
      for(let x=1;x<entry.length;x++){
          let matricula = entry[x].gsx$matricula.$t;
          let mensaje = entry[x].gsx$mensaje.$t;

          console.log('lo buscado ' + matriculaID);
          console.log('a ver ' + matricula);
          if (matricula == matriculaID) {
            console.log('encontrado');
            elresultado.innerHTML = mensaje;
            salida = true;
            break;
          } else {
            salida = false;
          }
      }

      salida ? console.log('ok') :   elresultado.innerHTML = 'Matrícula no encontrada, verifique que los datos sean correctos o consulte la lista completa.';;

    }
  )();


  }

}
