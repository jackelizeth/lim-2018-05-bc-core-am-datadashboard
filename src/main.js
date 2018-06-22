const inputText = document.getElementById('keyword-1');
const inputBtn = document.getElementById('btn-submit-1');
const responContainer = document.getElementById('respon-container');

let rr; 

inputBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getData(); 
});

const getData = () =>{     
                     
let xhr = new XMLHttpRequest();
    xhr.open( 'GET' ,'../data/cohorts/lim-2018-03-pre-core-pw/users.json', true)
    xhr.send();   
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
           // console.log(data)
            rr = data.filter( (fila) => {
                   return fila.signupCohort === 'lim-2018-03-pre-core-pw';
            })
           console.log(rr)
           for (let valor in rr){
            responContainer.innerHTML += '<li>' + rr[valor].id + '</li>';
 
            }
        }
    }
}

let rr2; 

inputBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    getData(); 
});

const getData = () =>{     
                     
let xhr = new XMLHttpRequest();
    xhr.open( 'GET' ,'../data/cohorts/lim-2018-03-pre-core-pw/users.json', true)
    xhr.send();   
    xhr.onreadystatechange = () =>{
        if(xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
           // console.log(data)
            rr = data.filter( (fila) => {
                   return fila.id
            })
           console.log(rr)
           for (let valor in rr){
            responContainer.innerHTML += '<li>' + rr[valor].id + '</li>';
            }
        }
    }
}

// for (let hh of rr){

// }

// let rr = data.map( (corre) => {
//     return corre.name
// })
        

//   for (let valor in rr){
//                 console.log(rr[valor].id)
//             }

// let obj = new computeUsersStats(rr, pr, ch);
//      obj.sortUsers(users, orderBy, orderDirection) 

