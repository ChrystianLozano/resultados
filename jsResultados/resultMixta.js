function mixtaLista(id) {
    const url = "https://spreadsheets.google.com/feeds/list/"+id+"/od6/public/values?alt=json";
    output.innerHTML = '';
    dateTest.innerHTML = '';
    alertMess.innerHTML = '';
    titleUnit.innerHTML = '';
    (async function load(){
      const response = await fetch(url);
      const data = await response.json()
      let entry = data.feed.entry;
      dateTest.innerHTML = 'Examen aplicado el ' + entry[0].gsx$matricula.$t;
      alertMess.innerHTML = '<h6 class="card-panel light-blue darken-4 z-depth-1 white-text" id="alertMess">' + entry[0].gsx$mensaje.$t + '</h6>';
      titleUnit.innerHTML = entry[0].gsx$titulo.$t;
      for(let x=1;x<entry.length;x++){
          let matricula = entry[x].gsx$matricula.$t;
          let mensaje = entry[x].gsx$mensaje.$t;
          listResult.innerHTML += '<tr><td class="center-align">'+matricula+'</td><td>' +mensaje+'</td></tr>';
      }
    })();
}
function mixtaLista2(id) {
    const url = "https://spreadsheets.google.com/feeds/list/"+id+"/od6/public/values?alt=json";
    output.innerHTML = '';
    dateTest.innerHTML = '';
    alertMess.innerHTML = '';
    titleUnit.innerHTML = '';
    (async function load(){
      const response = await fetch(url);
      const data = await response.json()
      let entry = data.feed.entry;
      dateTest.innerHTML = 'Examen aplico el ' + entry[0].gsx$matricula.$t;
      alertMess.innerHTML = '<h6 class="card-panel light-blue darken-4 z-depth-1 white-text" id="alertMess">' + entry[0].gsx$mensaje.$t + '</h6>';
      titleUnit.innerHTML = entry[0].gsx$titulo.$t;
      for(let x=1;x<entry.length;x++){
          let matricula = entry[x].gsx$matricula.$t;
          let carrera = entry[x].gsx$carrera.$t;
          let mensaje = entry[x].gsx$mensaje.$t;
          listResult.innerHTML += '<tr><td class="center-align">'+matricula+'</td><td class="center-align">'+carrera+'</td><td>' +mensaje+'</td></tr>';
      }
    })();
}
