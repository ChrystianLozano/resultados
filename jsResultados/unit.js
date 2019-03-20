const output = document.querySelector('#listResult');
const dateTest = document.querySelector('#dateTest');
const alertMess = document.querySelector('#alertMess');
const titleUnit = document.querySelector('#titleUnit');
      unidad.onchange=function(){
        if (unidad.value == 4) {
          const id = '1imqj0vgkt4YuYpZpa58SpCM0AipphSJTeENljz3CPbU'
          mixtaLista(id);
        }
        if (unidad.value == 1) {
          const id = '1JcgcsYXEDuaRSzEVquN3EPibYc7bo0n5Mg9I5sBDy8I'
          mixtaLista(id);
        }
        if (unidad.value == 2) {
          const id = '1ozESOG_vqhE3LuXTMDKvtPiHB0oXqa4Ey6nNK2_9LZ0'
          mixtaLista(id);
        }
        if (unidad.value == 3) {
          const id = '110bJ76KL7ufcu8Vor5BCcymWpX85zJQnpz5qSQpUPxA'
          mixtaLista2(id);
        }
      }
document.addEventListener('DOMContentLoaded', function() {
var unidad = document.querySelectorAll('select');
});
