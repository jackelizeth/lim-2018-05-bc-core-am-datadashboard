const inputText = document.getElementById('inp-text-1');
const inputBtn = document.getElementById('inp-btn-1');
const showInformation = document.getElementById('show-information');



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
        const selectCohorts = document.getElementById('listaCohort');
        // cada elemento de array sera recorrido
        arrCoh.forEach(ele => {
            // selectCohorts inserta en la etiqueta option,el elemento del array,solo el id de los cohorts
            // muestra todos los id lima mexico brasil
            selectCohorts.innerHTML +=`<option value=${ele.id}>${ele.id}</option>`;
        })


    selectCohorts.addEventListener('change',(event) => {

        let idCohort = event.target.value;//value = lim-2018-03-pre-core-pw

        const xhrUser = new XMLHttpRequest();
        // value del option es lim-2018-03-pre-core-pw = ${event.target.value} 
        xhrUser.open('GET',`../data/cohorts/${idCohort}/users.json`);//apertura una conexion
        // console.log(event.target.value);
        xhrUser.onload = (event) => { 
            // console.log(event.target.readyState) // 4 la respuesta esta lilkpsta 
            // console.log(event.target.status) // 200 todo esta correcto
            if (event.target.readyState == 4 && event.target.status == 200) {
                let arraUsers = JSON.parse(event.target.response);
                // const arrayUsers = arraUsers.filter(ele => ele.signupCohort == idCohort);
                // console.log(arrayUsers)


            // muestra el listado general de los cohorts
            const listaName = document.getElementById('listaName');
            // cada elemento de array sera recorrido
                arraUsers.forEach(ele => {
                // selectCohorts inserta en la etiqueta option,el elemento del array,solo el id de los cohorts
                // muestra todos los id lima mexico brasil
                listaName.innerHTML +=`<option value="${ele.name}">${ele.name}</option>`;
            })

            listaName.addEventListener('change',(event) => {
                let textName = document.getElementById("listaName").value;//lim-2018-03-pre-core-pw

                // console.log(textName)

                const xhrPro = new XMLHttpRequest();
                xhrPro.open('GET',`../data/cohorts/${idCohort}/progress.json`);//apertura una conexion
                xhrPro.onload = (event) => { 
                    if (event.target.readyState == 4 && event.target.status == 200) {
                        let objProgress = JSON.parse(event.target.response);
                        // console.log(objProgress)

                        const options = {
                            "cohort"          :  arrCoh.filter((ele) => {return ele.id == idCohort}),
                            // filter del arrCoh solo del ele su id comparo con el idCohort (idCohort = lim-2018-03-pre-core-pw) 
                            // cohort es solo filtro cohort lima [{lim-2018-03-pre-core-pw}] y todo su contenido
                            "cohortData"      :   {
                                                users       : arraUsers,
                                                progress    : objProgress,
                                                },
                            "orderBy"         : document.getElementById("orderBy").value,
                            "orderDirection"  : document.getElementById("orderDirection").value,
                            "search"          : textName

                          }
                         const cohortUsePro = processCohortData(options);// llamar a la funcion
                         mostrarDataProgress(cohortUsePro);
                        //  el objeto options contiene a arrCoh, arraUsers, objProgress

                    }
                //     const showCohort = (cohort ,arrCoh ) => {
                //         const cohortDeLima = arrCoh.filter(ele =>{
                //             return ele.id.indexOf(cohort) !== -1;
                //         });
                //         console.log(cohortDeLima)
                //     }
                //    showCohort();
                  
                }
                xhrPro.onerror = getError; //cuando no hay respuesta de la solicitud
                xhrPro.send();//ejecuta la peticion



            })



                
            }

        }; 
        xhrUser.onerror = getError; //cuando no hay respuesta de la solicitud
        xhrUser.send();//ejecuta la peticion
    })

};
xhrC.onerror = getError;
xhrC.send();//send envia o ejecuta la peticion




// // creando nodos 
// // creando el elemento p
// let pEleme = document.createElement('p');
// // creando nodo de texto para pEleme 
// let contenido = document.createTextNode('LISTA DE ALUMNAS');
// // a�adiendo el contenido al texto al pEleme
// pEleme.appendChild(contenido);
// // agregando atributo al pEleme
// pEleme.setAttribute('align', 'center');
// // colocando al ID con el nombre 'subtitulo' todo lo de arriba
// document.getElementById('subtitulo').appendChild(pEleme);

const mostrarDataProgress = (data) => {
console.log(data)


 // muestra el listado general de los cohorts
 const progreso = document.getElementById('progreso');
 progreso.innerHTML ="";
 // cada elemento de array sera recorrido
 data.forEach(ele => {
     // selectCohorts inserta en la etiqueta option,el elemento del array,solo el id de los cohorts
     // muestra todos los id lima mexico brasil
     progreso.innerHTML +=`Nombre: ${ele.name}<br>
     Exercises<br>
     Total:${ele.stats.exercises.total}<br>
     Completados:${ele.stats.exercises.completed}<br>
     Porcentaje:${ele.stats.exercises.percent}<br>`;
 })


}