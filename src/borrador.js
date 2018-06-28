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







ejemplo2
    // }
    alert(users)
    data.getData();
    return "Listado";
    

     function outputConexion(arr) {
     console.log(Object.keys(arr));
       const ids = Object.keys(arr);
       const partsObj = arr[ids[0]].intro.units['01-introduction'].parts;
       console.log(partsObj)
       const keysParts = Object.keys(partsObj)
       console.log(keysParts)
       console.log(partsObj[keysParts[0]].duration)
     
    let rr2; 
    
    inputBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getData(); 
    });

    
    let rr = data.map( (corre) => {
        return corre.name
    })   
    
      for (let valor in rr){
      console.log(rr[valor].id)
      }
    
    let obj = new computeUsersStats(rr, pr, ch);
         obj.sortUsers(users, orderBy, orderDirection) 
    
    window.sortUsers = (users, orderBy, orderDirection) => {
    }
    window.filterUsers = (users, search) => {
    }
    window.progressCohortsData = (users, progress, courses) => {
    }
    
        console.log(rr)
                   for (let valor in rr){
                   showInformation.innerHTML += '<option>' + rr[valor].name + '</option>';
                    }
    







     getData : ()=>{         
        let xhr = new XMLHttpRequest();
            xhr.open( 'GET' ,'../data/cohorts/lim-2018-03-pre-core-pw/users.json' , true)
            xhr.send();   
            xhr.onreadystatechange = () =>{
                if(xhr.readyState === 4 && xhr.status === 200){
                    let data = JSON.parse(xhr.responseText);
                   // console.log(data)
                    cohorts = data.filter( (fila) => {
                        // user
                           return fila.signupCohort === 'lim-2018-03-pre-core-pw';
                    })
                const select = document.getElementById('show-information');
                    for(let cohort of cohorts){
                        const element = document.createElement('option');
                        element.textContent = cohort.name;
                        select.appendChild(element)
    
                    }
                    let xhr = new XMLHttpRequest();
                    xhr.open( 'GET' ,'../data/cohorts/lim-2018-03-pre-core-pw/progress.json' , true)
                    xhr.send(); 
                    xhr.onreadystatechange = () =>{
                        if(xhr.readyState === 4 && xhr.status === 200){
                            let dataProgress = JSON.parse(xhr.responseText);
                            console.log(dataProgress)
    
                }
            }
        }
    
    }
}
    




//FUNCION VINCULA USER.JSON CON PROGRESS.JSON
//open: ABRE CONEXION
//GET: obtener información
//TRUE :SINCRONO
//SOLICITAR CUALQUIER TIPO DE ARCHIVO
//4:Requerimiento finalizado,respuesta lista
//200:conexion correcta /OK
//RESPUESTA FINALIZADA Y CORRECTA
//responseText: retorna respuesta como texto
//da  un array del archivo users.json

//***************CONEXION PARA OBTENER EL USER.JSON**********************************************/

let xmlhttp = new XMLHttpRequest();
let url = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";
xmlhttp.open("GET", url, true);
xmlhttp.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let arrUsers = JSON.parse(this.responseText);

        //***************CONEXION PARA OBTENER EL PROGRESS.JSON**********************************************/

        let xmlhttp2 = new XMLHttpRequest();
        var url2 = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";
        xmlhttp2.open("GET", url2, true);
        xmlhttp2.onload = function (event) {
            let ObjectProgress = JSON.parse(this.responseText);


            //***************CONEXION PARA OBTENER LOS COHORTS.JSON**********************************************/

            let xmlhttp3 = new XMLHttpRequest();
            var url3 = "../data/cohorts.json";
            xmlhttp3.open("GET", url3, true);
            xmlhttp3.onload = function (event) {
                let arrCohorts = JSON.parse(this.responseText);
         for (const iteratorCohorts of arrCohorts) {
                
                    let body = document.getElementById('tbody');
    
                    for (const iteratorUsers of arrUsers) {
                        if (iteratorCohorts.id === 'lim-2018-03-pre-core-pw') {
                       
                            if (iteratorUsers.role === 'student') {
                                //console.log(iteratorCohorts.id + ' ' + iteratorUsers.role + ' ' + iteratorUsers.name + ' ' + iteratorCohorts.start);
                                body.innerHTML += `
                              <tr>
                                <td>${ iteratorUsers.name}</td>
                                <td>${ iteratorUsers.signupCohort}</td>
                                <td>${ iteratorUsers.role}</td>
                                <td>${ iteratorUsers.timezone}</td>
                                <td>${ iteratorUsers.locale}</td>
                            </tr>
                                   `
                            }
                        }
                    }
                }
            };
            xmlhttp3.send();
        };
        //********************ENVIA REQUEST AL SERVIDOR PROGRESS*******************************
        xmlhttp2.send();
    }
};
//********************ENVIA REQUEST AL SERVIDOR USERS*******************************
xmlhttp.send();








// USER 735
let xhrU = new XMLHttpRequest();
let urlUs = "../data/cohorts/lim-2018-03-pre-core-pw/users.json";
xhrU.open('GET', urlUs);
xhrU.onload = function (e) {
    if (this.readyState == 4 && this.status == 200) {
            let arraUsers = JSON.parse(this.responseText);
            // console.log(arraUsers);
//PROGRESS
        let xhrP = new XMLHttpRequest();
        var urlPro = "../data/cohorts/lim-2018-03-pre-core-pw/progress.json";
        xhrP.open('GET', urlPro);
        xhrP.onload = function (e) {
            let objProgress = JSON.parse(this.responseText);
            // console.log(objProgress);
//COHORTS
            let xhrC = new XMLHttpRequest();
            var urlCoh = "../data/cohorts.json";
            xhrC.open('GET', urlCoh,true);
            xhrC.onload = function (e) {
            let arraCohorts = JSON.parse(this.responseText);
            // console.log(arraCohorts);
           
 // OBJETOS PROGRESS       
                let arraProgress = Object.keys(objProgress);
                for (let progress of arraProgress){
                console.log(progress);
                }
// ARRAY OBJETOS USERS 726
                let arrUsers = arraUsers.filter( (fila) => {             
                    return fila.signupCohort === 'lim-2018-03-pre-core-pw';

                    const container = document.getElementById('container');
  
  
                    for (let index in jedis){
                      console.log(jedis[index]);
                      const phrase = document.createElement('p');
                      phrase.innerHTML = `Mi nombre es ${jedis[index].name}`;
                      container.appendChild(phrase);
                    }
                  
                });
                console.log(arrUsers);

            };
            xhrC.send();
        };
        //********************ENVIA REQUEST AL SERVIDOR PROGRESS*******************************
        xhrP.send();
    }
};
//********************ENVIA REQUEST AL SERVIDOR USERS*******************************
xhrU.send();

     }