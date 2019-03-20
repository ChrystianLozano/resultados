function mixtaLista(id) {
    const url = "https://spreadsheets.google.com/feeds/list/"+id+"/od6/public/values?alt=json";
    output.innerHTML = '';
    dateTest.innerHTML = '';
    alertMess.innerHTML = '';
    titleUnit.innerHTML = '';
    buscar.innerHTML = '';
    (async function load(){
      output.innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
      const response = await fetch(url);
      const data = await response.json();
      let entry = data.feed.entry;
      buscar.innerHTML = `<div class="input-field col s6">
          <i class="material-icons prefix">search_circle</i>
          <input id="icon_prefix" type="number" class="validate" required>
          <label for="icon_prefix">Matrícula</label>
        </div>
        <div class="input-field col s6">
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="botonBuscar">Buscar</a>
          </div>`;
          document.getElementById('botonBuscar').addEventListener('click', enlista);
      dateTest.innerHTML = 'Examen aplicado el ' + entry[0].gsx$matricula.$t;
      alertMess.innerHTML = '<h6 class="card-panel light-blue darken-4 z-depth-1 white-text" id="alertMess">' + entry[0].gsx$mensaje.$t + '</h6>';
      titleUnit.innerHTML = entry[0].gsx$titulo.$t;
      output.innerHTML = '';
      for(let x=1;x<entry.length;x++){
          let matricula = entry[x].gsx$matricula.$t;
          let mensaje = entry[x].gsx$mensaje.$t;
          output.innerHTML += '<tr><td class="center-align">'+matricula+'</td><td>' +mensaje+'</td></tr>';
      }
    })();
}
function mixtaLista2(id) {
    const url = "https://spreadsheets.google.com/feeds/list/"+id+"/od6/public/values?alt=json";
    output.innerHTML = '';
    dateTest.innerHTML = '';
    alertMess.innerHTML = '';
    titleUnit.innerHTML = '';
    buscar.innerHTML = '';
    (async function load(){
      output.innerHTML = '<div class="progress"><div class="indeterminate"></div></div>';
      const response = await fetch(url);
      const data = await response.json()
      let entry = data.feed.entry;
      buscar.innerHTML = `<div class="input-field col s6">
          <i class="material-icons prefix">search_circle</i>
          <input id="icon_prefix" type="number" class="validate" required>
          <label for="icon_prefix">Matrícula</label>
        </div>
        <div class="input-field col s6">
          <a class="waves-effect waves-light btn modal-trigger" href="#modal1" id="botonBuscar">Buscar</a>
          </div>`;
          document.getElementById('botonBuscar').addEventListener('click', enlista);
      dateTest.innerHTML = 'Examen aplicado el ' + entry[0].gsx$matricula.$t;
      alertMess.innerHTML = '<h6 class="card-panel light-blue darken-4 z-depth-1 white-text" id="alertMess">' + entry[0].gsx$mensaje.$t + '</h6>';
      titleUnit.innerHTML = entry[0].gsx$titulo.$t;
      output.innerHTML = '';
      for(let x=1;x<entry.length;x++){
          let matricula = entry[x].gsx$matricula.$t;
          let carrera = entry[x].gsx$carrera.$t;
          let mensaje = entry[x].gsx$mensaje.$t;
          output.innerHTML += '<tr><td class="left-align">'+carrera+'</td><td class="center-align">'+matricula+'</td><td>' +mensaje+'</td></tr>';
      }
    })();
}
