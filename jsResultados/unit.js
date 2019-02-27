const output = document.querySelector('#listResult');

      var unidad = document.getElementById('unidad');
      unidad.onchange=function(){
        if (unidad.value == 4) {
          mixtaLista();
        }
      }
      function mixtaLista() {
          const id = '1imqj0vgkt4YuYpZpa58SpCM0AipphSJTeENljz3CPbU'
          const url = "https://spreadsheets.google.com/feeds/list/"+id+"/od6/public/values?alt=json";
          output.innerHTML = '';
          fetch(url).then(function (response) {
                          return response.json()
                      }).then(function (data) {
                          let entry = data.feed.entry;
                          dateTest.innerHTML = "<div>" + entry[0].gsx$matricula.$t + "</div>";
                          alertMess.innerHTML = '<h6 class="card-panel light-blue darken-4 z-depth-1 white-text" id="alertMess">' + entry[0].gsx$mensaje.$t + '</h6>';
                          titleUnit.innerHTML = "<div>" + entry[0].gsx$titulo.$t + "</div>";

                          for(let x=1;x<entry.length;x++){
                              let matricula = entry[x].gsx$matricula.$t;
                              let mensaje = entry[x].gsx$mensaje.$t;
                              listResult.innerHTML += '<tr><td class="center-align">'+matricula+'</td><td>' +mensaje+'</td></tr>';
                          }
                      })
          .catch(function(error){
              console.log(error);
          })
      }


      document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
//var instances = M.FormSelect.init(elems, options);
});
