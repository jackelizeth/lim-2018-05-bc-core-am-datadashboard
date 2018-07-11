// const inputText = document.getElementById('inp-text-1');
// const inputBtn = document.getElementById('inp-btn-1');
// const showInformation = document.getElementById('show-information');
// const inputTextName = document.getElementById('inputTextName');
let urlCoh = '../data/cohorts.json';

const getError = () => {
    console.log('existe un error')
}

// data cohort
const xhrC = new XMLHttpRequest();
xhrC.open('GET', urlCoh); // 
xhrC.onload = (event) => { // onload carga un documento y cuando termina lo analiza //funcion anonima

const arrCoh = JSON.parse(event.target.response);

// muestra el listado general de los cohorts
const selectListaCohorts = document.getElementById('listaCohort');

    // cada elemento de array sera recorrido
    arrCoh.forEach(ele => {

    // selectListaCohorts inserta en la etiqueta option,el elemento del arrCoh, muestra todos los id de los cohorts lima mexico brasil
    selectListaCohorts.innerHTML +=`<option value=${ele.id}>${ele.id}</option>`;
    });


const search = document.getElementById('btn-search');

search.addEventListener('click',(event) => {   

    let idCohort =  document.getElementById('listaCohort').value;//value = lim-2018-03-pre-core-pw
    console.log(idCohort);

    const xhrUser = new XMLHttpRequest();
    xhrUser.open('GET',`../data/cohorts/${idCohort}/users.json`);//apertura una conexion //lim-2018-03-pre-core-pw = ${event.target.value} 
    xhrUser.onload = (event) => { 

        // console.log(event.target.readyState) // 4 la respuesta esta lista 
        // console.log(event.target.status) // 200 todo esta correcto
        if (event.target.readyState == 4 && event.target.status == 200) {

            let arraUsers = JSON.parse(event.target.response);
            // console.log(arrayUsers)


                const xhrPro = new XMLHttpRequest();
                xhrPro.open('GET',`../data/cohorts/${idCohort}/progress.json`);//apertura una conexion
                xhrPro.onload = (event) => { 

                    if (event.target.readyState == 4 && event.target.status == 200){
                        
                        let objProgress = JSON.parse(event.target.response);
                        // console.log(objProgress)

                        const options = {
                            "cohort"          :  arrCoh.filter((ele) => {return ele.id == idCohort}),
                            // filter del arrCoh solo del ele su id comparo con el idCohort (idCohort = lim-2018-03-pre-core-pw) 
                            // cohort es solo filtro cohort lima [{lim-2018-03-pre-core-pw}] y todo su contenido
                            "cohortData"      : {
                                                "users"       : arraUsers,
                                                "progress"    : objProgress,
                                                },


                            "orderBy"         : document.getElementById('orderBy').value,
                            "orderDirection"  : document.getElementById('orderDirection').value,
                            "search"          : document.getElementById('inputStudents').value,


                        }
                        const cohortUsePro = processCohortData(options);// llamar a la funcion 
                        // console.log(options)
                        // el objeto options contiene: 
                        // (cohort : [arrCoh]),
                        // (cohortData :   { (user : [arraUsers]), (progress : {objProgress})  } )
                        // orderBy,orderDirection,search

                        newDataAllUser(cohortUsePro);
                        // console.log(cohortUsePro)  
                        // cohortUsePro = contiene todo lo que retorna processCohortData
                        // cohortUsePro contiene el objeto {name, stats :{ percent, exercises ,reads, quizzes}}                
                    
                    }
                }
                xhrPro.onerror = getError; //cuando no hay respuesta de la solicitud
                xhrPro.send();//ejecuta la peticion

        // });
    }
    }; 
    xhrUser.onerror = getError; 
    xhrUser.send();

});
},
xhrC.onerror = getError;
xhrC.send();





const newDataAllUser = (data) => {
// console.log(data)

//  muestra el listado general de los cohorts
const progresoExercises = document.getElementById('progresoExerci');
progresoExercises.innerHTML ="";

 // cada elemento de array sera recorrido
data.forEach(ele => {
    
    progresoExercises.innerHTML +=`
     NOMBRE: ${ele.name}<br><br>
     EXERCISES:<br>
     Total:${ele.stats.exercises.total}<br>
     Completados:${ele.stats.exercises.completed}<br>
     Porcentaje:${ele.stats.exercises.percent}<br><br>

     READ:<br>
     Total:${ele.stats.reads.total}<br>
     Completados:${ele.stats.reads.completed}<br>
     Porcentaje:${ele.stats.reads.percent}<br><br>

     QUIZ:<br>
     Total:${ele.stats.quizzes.total}<br>
     Completados:${ele.stats.quizzes.completed}<br>
     Porcentaje:${ele.stats.quizzes.percent}<br>
     scoreSum:${ele.stats.quizzes.scoreSum}<br>
     scoreAvg:${ele.stats.quizzes.scoreAvg}<br><br><hr>

     `;

});

}






//  // muestra el listado general de los cohorts
//  const progresoExercises = document.getElementById('progresoExerci');
//  progresoExercises.innerHTML ="";
 
//   // cada elemento de array sera recorrido
//  data.forEach(ele => {
     
//      progresoExercises.innerHTML +=`
//       NOMBRE: ${ele.name}<br>
//       EXERCISES:<br>
//       Total:${ele.stats.exercises.total}<br>
//       Completados:${ele.stats.exercises.completed}<br>
//       Porcentaje:${ele.stats.exercises.percent}<br>
//       `;
 
//  });

//  const read = document.getElementById('read');
//  read.innerHTML ="";
 
//   // cada elemento de array sera recorrido
//  data.forEach(ele => {
     
//       read.innerHTML +=`
//       NOMBRE: ${ele.name}<br>
//       READ:<br>
//       Total:${ele.stats.reads.total}<br>
//       Completados:${ele.stats.reads.completed}<br>
//       Porcentaje:${ele.stats.reads.percent}<br>
//       `;
 
//  });


//  const quiz = document.getElementById('quiz');
//  quiz.innerHTML ="";
 
//   // cada elemento de array sera recorrido
//  data.forEach(ele => {
      
//       quiz.innerHTML +=`
//       NOMBRE: ${ele.name}<br>
//       QUIZ:<br>
//       Total:${ele.stats.quizzes.total}<br>
//       Completados:${ele.stats.quizzes.completed}<br>
//       Porcentaje:${ele.stats.quizzes.percent}<br>
//       scoreSum:${ele.stats.quizzes.scoreSum}<br>
//       scoreAvg:${ele.stats.quizzes.scoreAvg}<br>
//       `;
 
//  });
//  }








// // creando nodos 
// // creando el elemento p
// let pEleme = document.createElement('p');
// // creando nodo de texto para pEleme 
// let contenido = document.createTextNode('LISTA DE ALUMNAS');
// //  el contenido al texto al pEleme
// pEleme.appendChild(contenido);
// // agregando atributo al pEleme
// pEleme.setAttribute('align', 'center');
// // colocando al ID con el nombre 'subtitulo' todo lo de arriba
// document.getElementById('subtitulo').appendChild(pEleme);