const form_1 = document.getElementById('form-1');
const field_1 = document.getElementById('keyword-1');

const form_2 = document.getElementById('form-2');
const field_2 = document.getElementById('keyword-2');
 
const form_3 = document.getElementById('form-3');
const field_3 = document.getElementById('keyword-3');
 
const responContainer = document.getElementById('respon-container');

let option;

form_1.addEventListener('submit', function (e) {
    e.preventDefault(),
    responContainer.innerHTML='';
    option ="cohort";
    getData('/data/cohorts.json');
});

form_2.addEventListener('submit', function (e) {
    e.preventDefault(),
    responContainer.innerHTML='';
    option ="user";
    getData('/data/cohorts/lim-2018-03-pre-core-pw/users.json');
});

form_3.addEventListener('submit', function (e) {
    e.preventDefault(),
    responContainer.innerHTML='';
    option ="progress";
    getData('/data/cohorts/lim-2018-03-pre-core-pw/progress.json');
});

function getData (Url) { 

var xhr = new XMLHttpRequest();
    xhr.open("GET", Url , true)
    xhr.onload = dataNew;
    xhr.onerror = dataError;
    xhr.send();
}

function dataNew () {    
    let listado = "";
    if(option =="cohort"){
        //responText retorna la respuesta como string
        //JSON.parse lo convierten a un objeto JSON
        const data = JSON.parse(this.responseText);
        //console.log(data)
        data.forEach(block => {
            listado +=  block.id+"<br>";
        });
        
    }else if(option == "user"){
        const data = JSON.parse(this.responseText);
        //console.log(data)
        data.forEach(block => {
            listado += block.name +"---"+ block.role+"<br>";
        });

    }else{
        const data = Object.keys(JSON.parse(this.responseText)) ;
        //console.log(data)
        data.forEach(block => {
            listado += block +"<br>";
        });
    }
    responContainer.innerHTML= listado ;
} 
function dataError(){
        console.log ('Se ha producido un error');
}
