let urlCoh = '../data/cohorts.json';

const getError = () => {
    console.log('existe un error')
}

    /** data cohort **/
    const xhrC = new XMLHttpRequest();
    xhrC.open('GET', urlCoh); //apertura una conexion
    xhrC.onload = (event) => { // onload carga el documento y lo analiza //funcion anonima

        // console.log(event.target.readyState) // 4 la respuesta esta lista 
        // console.log(event.target.status) // 200 todo esta correcto
        if (event.target.readyState == 4 && event.target.status == 200) {

        const arrCoh = JSON.parse(event.target.response);

        /** etiqueta select listado general de los cohorts **/
        const selectListaCohorts = document.getElementById('listaCohort');

            // cada elemento de array sera recorrido
            arrCoh.forEach(ele => {

            // selectListaCohorts inserta en la etiqueta option los id de los cohorts lima mexico brasil
            selectListaCohorts.innerHTML +=`<option value=${ele.id}>${ele.id}</option>`; //realizando template
            });

        /** creando evento a la etiqueta input boton de search SendData**/
        const SendData = (event) => {   

                let idCohort =  document.getElementById('listaCohort').value;//value = lim-2018-03-pre-core-pw

                /** data users **/
                const xhrUser = new XMLHttpRequest();
                xhrUser.open('GET',`../data/cohorts/${idCohort}/users.json`); //lim-2018-03-pre-core-pw = ${idCohort}
                xhrUser.onload = (event) => { 

                if (event.target.readyState == 4 && event.target.status == 200) {

                    let arraUsers = JSON.parse(event.target.response);

                         /** data progress **/
                        const xhrPro = new XMLHttpRequest();
                        xhrPro.open('GET',`../data/cohorts/${idCohort}/progress.json`);
                        xhrPro.onload = (event) => { 

                        if (event.target.readyState == 4 && event.target.status == 200) {
                            
                            let objProgress = JSON.parse(event.target.response);

                            const options = {
                                "cohort"          :  arrCoh.filter((ele) => {return ele.id == idCohort}),
                                // filter del arrCoh el id  compararlo con el idCohort (idCohort = lim-2018-03-pre-core-pw) 
                                "cohortData"      : {
                                                    "users"       : arraUsers,
                                                    "progress"    : objProgress,
                                                    },

                                "orderBy"         : document.getElementById('orderBy').value,
                                "orderDirection"  : document.getElementById('orderDirection').value,
                                "search"          : document.getElementById('inputStudents').value,
                            }

                            const cohortUsePro = processCohortData(options);// llamar a la funcion 
                            // console.log(options)// captura todo el lo que contiene el objeto options
                            // contiene :  (cohort : [arrCoh]),
                            // (cohortData :   { (user : [arraUsers]), (progress : {objProgress})  } )
                            // orderBy,orderDirection,search

                            newDataAllUser(cohortUsePro);// llamar a la funcion 
                            // console.log(cohortUsePro)// captura todo lo que retorna processCohortData
                            // cohortUsePro contiene el objeto {name, stats :{ percent, exercises ,reads, quizzes}}                
                        }
                        }
                        xhrPro.onerror = getError; //cuando no hay respuesta de la solicitud
                        xhrPro.send();//ejecuta la peticion
                }
                }; 
                xhrUser.onerror = getError; 
                xhrUser.send();
        };
        /** etiqueta input boton de search  **/
        const search = document.getElementById('btn-search');
        const orderBy = document.getElementById('orderBy');
        const orderDirection = document.getElementById('orderDirection');

        search.addEventListener('click',SendData);   
        orderBy.addEventListener('change',SendData);   
        orderDirection.addEventListener('change',SendData);   
    }
},
xhrC.onerror = getError;
xhrC.send();

const newDataAllUser = (data) => {//captura todo lo que retorna processCohortData
// console.log(data)//newDataAllUser (data) = (cohortUsePro) 
//(data) = contiene el objeto options = {name, stats :{ percent, exercises ,reads, quizzes}}

    /**  captura de la etiqueta section su id **/   
    const progresoExercises = document.getElementById('progresoExerci');

    progresoExercises.innerHTML ="";//se mostrara la newDataAllUser
    
    let dataHtml = '';

     /** recorre (data) = objeto options = {name, stats :{ percent, exercises ,reads, quizzes}}**/   
    data.forEach(ele => {

        dataHtml +=`
        NOMBRE: ${ele.name}<br><br>

        Porcentaje general:${ele.stats.percent}%<br><br>

        EXERCISES:<br>
        Total:${ele.stats.exercises.total}<br>
        Completados:${ele.stats.exercises.completed}<br>
        Porcentaje:${ele.stats.exercises.percent}%<br><br>

        READ:<br>
        Total:${ele.stats.reads.total}<br>
        Completados:${ele.stats.reads.completed}<br>
        Porcentaje:${ele.stats.reads.percent}%<br><br>

        QUIZ:<br>
        Total:${ele.stats.quizzes.total}<br>
        Completados:${ele.stats.quizzes.completed}<br>
        Porcentaje:${ele.stats.quizzes.percent}%<br>
        scoreSum:${ele.stats.quizzes.scoreSum}<br>
        scoreAvg:${ele.stats.quizzes.scoreAvg}<br><br><hr>
        `;//realizando template
    });
    progresoExercises.innerHTML =  dataHtml;
}

