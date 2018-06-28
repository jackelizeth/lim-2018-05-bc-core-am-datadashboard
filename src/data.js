const urlCoho = '../data/cohorts.json';
const urlUse = '../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const urlPro = '../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

const getData =  (event) => { 
    let data = JSON.parse(event.target.responseText); 
    console.log(data)
}
// onload es un evento
var xhr = new XMLHttpRequest();
    xhr.open("GET", url )
    xhr.onload = getData;
    xhr.onerror = dataError;
    xhr.send();

const dataError = () => {
    console.log('Se ha producido un error');
}

// user es un Array
// cohort en un Array
// progres es unn Objeto
// const dataUsProCoho = ( (e) => {

