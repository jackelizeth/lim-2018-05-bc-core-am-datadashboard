window.computeUsersStats = (users, progress, courses) => {
    const arrayUsers = users;
    const objProgress = progress;
    const arrayCourses = courses;
    //  console.log(arrayCourses[0]);
    
    const arrayProgress = Object.keys(objProgress);

    let arrOnlyStudents = arrayUsers.filter(eleUser => eleUser.signupCohort === 'lim-2018-03-pre-core-pw');
        // console.log(arrOnlyStudents);//726 estudiantes

    const usersWithStats = arrOnlyStudents.map(eleStudents => {    
        
    if(objProgress[eleStudents.id].hasOwnProperty("intro")){  
        // objProgress[eleStudents.id]["intro"]
        // console.log(objProgress[eleStudents.id].hasOwnProperty("intro"))
        const usersProgress = objProgress[eleStudents.id].intro.units;
         console.log(usersProgress);


       }else{
    
       }

    });
    // console.log(usersWithStats)
    

    // const arrayProgress = Object.keys(objProgress);
    // // console.log(arrayProgress);


    //  const calculaPercent = user => {

    // }

    // const calculaStats = (user, type) => {

    // }




    // const arrayUsers = arraUsers.filter(ele => ele.signupCohort == idCohort);
    //  let arrStudents = arrayUsers.filter(user => user.role === 'student');
    // let arrOnlyStudents = arrayUsers.filter(user => user.signupCohort === 'lim-2018-03-pre-core-pw');

    // // console.log(arrOnlyStudents)//726 estudiantes
    
    // const onlyName = arrOnlyStudents.map(user1 => user1.name);//retorna los nombres
    // // console.log(onlyName)

    // const ordenandoName = onlyName.sort((ele1, ele2) => {
    //     if (ele1 > ele2) {
    //         return 1;
    //     }else if (ele1 < ele2) {
           
    //         return -1;
    //     }else { 
    //         return 0;
    //     }
    // });
    // // console.log(ordenandoName);//lista de nombres ordenado


    // const selectName = document.getElementById('listaName');
    // let listaUsuarios = '';
    // ordenandoName.map(user2 => {
    //     listaUsuarios  +=`<option value=${user2}>${user2}</option>`;
        
    // })
    // selectName.innerHTML = listaUsuarios

}

            
        // const stats = {

        //     userid:   user.id,
        //     name:   user.name,
            
        //     stats   :   { 
        //                 percent     :  totalPercent(user),  
            
        //                 exercises   :   {
        //                                 total       :   hhh(),
        //                                 completed   :   completedExercises(),
        //                                 percent     :   percentExercises(),
        //                 },
            
        //                 reads : {
        //                                 total       :   totalReads(),
        //                                 completed   :   completedReads(),
        //                                 percent     :   percentReads(),       
                        
        //                         },
            
        //                 quizzes : {
        //                                 total       :   totalQuizzes(), 
        //                                 completed   :   completedQuizzes(),
        //                                 percent     :   percentQuizzes(),
        //                                 scoreSum    :   scoreSumQuizzes(),
        //                                 scoreAvg    :   scoreAvgQuizzes(),
        //                 }
        //             }

        //         }
        // console.log(usersWithStats)
            
    // window.sortUsers = (users, orderBy, orderDirection) => {
    // // console.log(users)
    // // console.log(orderBy)
    // // console.log(orderDirection)
    // }
    
    // window.filterUsers = (users, search) => { 


    // // console.log(users)
    // // console.log(search) 
    // }
 
    window.processCohortData = (options) => {
        // optionses un objeto
        // console.log(options)

        // options.cohort = [{lim-2018-03-pre-core-pw}] y todo su contenido
        // options.cohort[0] = ingreso a su elemento o propiedad {lim-2018-03-pre-core-pw}y todo su contenido
        // options.cohort[0].coursesIndex = el (puto) significa que ingreso al objeto y me situo en la propiedad coursesIndex
        // coursesIndex = me muestra su valor que es {intro: y todo su contenido}
        // arrayCourses = es con el Object.keyses un [{'intro'}] solo de propiedades
        const arrayCourses = Object.keys(options.cohort[0].coursesIndex);
        // console.log(arrayCourses)

        let student = computeUsersStats(options.cohortData.users, options.cohortData.progress, arrayCourses);
        // student = filterUsers(options.cohortData.users, options.search)
       
        // sortUsers(options.cohortData.users, options.orderBy, options.orderDirection)
    }


    // let estudiantes = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
    // estudiantes = sortUsers(estudiantes, options.orderBy, options.orderDirection);
    // if (options.search !== '') {
    //   estudiantes = filterUsers(users, search);
    // }
    // return estudiantes;


    // const search = () => {
    //     const nuevoUsers = dataUsers.filter((user) => {
    //       return user.goles > 10
    //     });
    //     return nuevoUsers;
    //   }
    //   console.log(search())
