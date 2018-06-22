const form_1 = document.getElementById('form-1');
const field_1 = document.getElementById('keyword-1');

const form_2 = document.getElementById('form-2');
const field_2 = document.getElementById('keyword-2');
 
const form_3 = document.getElementById('form-3');
const field_3 = document.getElementById('keyword-3');
 
const responContainer = document.getElementById('respon-container');

let cohortData;
let userData;
let ProgressData;

form_1.addEventListener('submit', (e) => {
    e.preventDefault(),
    getData('/data/cohorts.json', (e) => {
        // currentTarget = Identifica el objetivo actual para el evento
        // responseText = retorna la respuesta como string
        // analiza texto JSON, transformando opcionalmente  el valor 
        const data = JSON.parse(e.currentTarget.responseText);
        responContainer.innerHTML='';
        console.log(data)
        cohortData = data;
    });
});

form_2.addEventListener('submit', (e) => {
    e.preventDefault(),
     getData('/data/cohorts/lim-2018-03-pre-core-pw/users.json', (e) => {
        const data = JSON.parse(e.currentTarget.responseText);
        responContainer.innerHTML='';
        console.log(data)
        userData=data;
    });
});

form_3.addEventListener('submit', (e) => {
    e.preventDefault(),
    getData('/data/cohorts/lim-2018-03-pre-core-pw/progress.json', (e) => {
        const data = JSON.parse(e.currentTarget.responseText);
        responContainer.innerHTML='';
        console.log(data)
        ProgressData = data;
    });
});

const getData =  (url, callback) => { 

var xhr = new XMLHttpRequest();
    xhr.open("GET", url , true)
    xhr.onload = callback;//le creo una funcion con 3 cuerpos
    xhr.onerror = dataError;
    xhr.send();
}



//  const urlU = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';g
//  const users = () =>{
//      const datauser = JSON.parse(event.target.responseText);
//  }
//  getData(urlU, users)

const dataError = () => {
        console.log ('Se ha producido un error');
}

// let infouser = new computeUsersStats(cohortData,userData,ProgressData);



