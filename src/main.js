const inputText = document.getElementById('inp-text-1');
const inputBtn = document.getElementById('inp-btn-1');
const showInformation = document.getElementById('show-information');

// inputBtn.addEventListener('click', (e) =>{
// const resulData = data.computeUsersStats(inputText.value,2,3);
// showInformation.innerHTML = resulData;
// });

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
//  Object.keys() devuelve un array de un objeto
               let arraProgress = Object.keys(objProgress);
               for (let progress of arraProgress){
               //console.log(progress);
               }
// ARRAY OBJETOS USERS 726
               let arrUsers = arraUsers.filter( (fila) => {            
                   return fila.signupCohort === 'lim-2018-03-pre-core-pw';
               });
               //console.log(arrUsers);

               computeUsersStats(arrUsers, arraProgress, [])

           };
           xhrC.send();
       };
       xhrP.send();
   }
};





