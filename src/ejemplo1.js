const listCampus = document.querySelectorAll('#sedes');
const sectionMainContent = document.getElementById('main-coment');
// console.log(sectionMainContent);

// for(const campus of listCampus){
    listCampus.addEventListenert('click', (event) => {
        sectionMainContent.innerHTML = `
        <div class = 'cohort'>     
        <p>${event.target.id}</p>
        </div>  
        `;
        
        // interpolacion funciona con comillas invertidas
        // concatena string e interpola variables ${event.target.textContent} 
        console.log(event.target.id);
    });
// }

// const getData = (str, url, callback) => {

//     const xhr = new XMLHttpRequest();
//         xhrPro.open('GET',`../data/cohorts/${idCohort}/progress.json`);//apertura una conexion
//         xhrPro.addEventListener('load', event => {
//         if (event.target.readyState == 4 ){
//             if(event.target.status == 200){
//                  return console.error(new Error ( `HTTP error: ${event.target.}`))
//             }else{
//                 let objProgress = JSON.parse(event.target.response);
//             }
//         }
// });



// const 
// const xhrC = new XMLHttpRequest();
// xhrC.open('GET', urlCoh); // 
// xhrC.onload = (event) => { // onload carga un documento y cuando termina lo analiza //funcion anonima
//     const arrCoh = JSON.parse(event.target.response);hyu
//     // console.log(arrCoh)
// }
