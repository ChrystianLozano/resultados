function mixtaLista(id) {
    const url = "https://spreadsheets.google.com/feeds/list/"+id+"/od6/public/values?alt=json";
    output.innerHTML = '';
    output.dateTest = '';
    output.alertMess = '';
    output.titleUnit = '';
    fetch(url).then(function (response) {
                    return response.json()
                }).then(function (data) {
                    let entry = data.feed.entry;
                    dateTest.innerHTML = entry[0].gsx$matricula.$t;
                    alertMess.innerHTML = '<h6 class="card-panel light-blue darken-4 z-depth-1 white-text" id="alertMess">' + entry[0].gsx$mensaje.$t + '</h6>';
                    titleUnit.innerHTML = entry[0].gsx$titulo.$t;

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
