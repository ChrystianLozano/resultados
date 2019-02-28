const output = document.querySelector('#listResult');
const dateTest = document.querySelector('#dateTest');
const alertMess = document.querySelector('#alertMess');
const titleUnit = document.querySelector('#titleUnit');

      var unidad = document.getElementById('unidad');
      unidad.onchange=function(){
        if (unidad.value == 4) {
          const id = '1imqj0vgkt4YuYpZpa58SpCM0AipphSJTeENljz3CPbU'
          mixtaLista(id);
        }
        if (unidad.value == 1) {
          const id = '1JcgcsYXEDuaRSzEVquN3EPibYc7bo0n5Mg9I5sBDy8I'
          mixtaLista(id);
        }
      }
      document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('select');
//var instances = M.FormSelect.init(elems, options);
});
