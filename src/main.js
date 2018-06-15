const form = document.getElementById('mi_form');
const miField = document.getElementById('mi_keyword');
const miResponContainer = document.getElementById('respon_container');
let miForText;


form.addEventListener('submit', function (e) {
    e.preventDefault(),
    miResponContainer.innerHTML='';
    miForText = miField.value;
    getNews();
});

function getNews () { 
 //   alert(1233344)
var xhttp = new XMLHttpRequest();
    xhttp.open('GET','http://127.0.0.1:8080/data/cohorts.json')
    xhttp.onload = addNews;
    xhttp.onerror = handleError;
    xhttp.send();
    }
 
function addNews () {
    const data = JSON.parse(this.responseText);
    miResponContainer.innerHTML= data;
} 
   
function handleError(){
        console.log ('Se ha producido un error');
    }