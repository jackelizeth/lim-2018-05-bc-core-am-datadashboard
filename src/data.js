window.computeUsersStats = (users, progress, courses) => {
    const objProgress = progress;
    const arrayCourses = courses;
    console.log(users);
    // object keys me devuelven las propiedades del objeto.
    // const arrayProgress = Object.keys(objProgress);

    // const arrayUsers = arraUsers.filter(ele => ele.signupCohort == idCohort);
    // let arrStudents = arrayUsers.filter(user => user.role === 'student');
    const arrOnlyStudents = users.filter(eleUser => eleUser.signupCohort === 'lim-2018-03-pre-core-pw');
       // console.log(arrOnlyStudents);//726 estudiantes

    /**  funciones de calculos **/
    const calcularExercisesPractice = (objCoursesUserId) => { //{objeto con 3 courses completos}
        // console.log(objCoursesUserId);

        let totalExercises = 0;
        let completedExercises = 0;
        let percentExercises = '';

        const arrCourses = Object.keys(objCoursesUserId) // [ keys 3 courses]
        // console.log(arrCourses);
       
        arrCourses.map(eleCourse =>{ 

        const objGeneral_6_keysCaUnoCourses = objCoursesUserId[eleCourse]; // {3 courses completos} ingresa c/u (eleCourse) = muestra 3 {6 keys} por course 
            // console.log(objGeneral_6_keysCaUnoCourses); // muestra 3 {6 keys} por course

            // console.log(objGeneral_6_keysCaUnoCourses.parts); //ingresa (parts) c/u course = muestra 1er-parts{5 keys}, 2er-parts {4 keys}, 3er-parts {7 keys} 

        Object.keys(objGeneral_6_keysCaUnoCourses.parts).map(elePart =>{ // [] mapea cada elePart 
            const objKeyValorCaUnoCourses = objGeneral_6_keysCaUnoCourses.parts[elePart]; // ingresa (parts), ingresa c/u (elePart)  = muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}
                // console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                //  console.log(objKeyValorCaUnoCourses.completed)

                if(objKeyValorCaUnoCourses.hasOwnProperty('exercises')){//true si tiene la propiedad exercises
                    const obje_exercises = objKeyValorCaUnoCourses.exercises ; // ingresa de propiedad exercises de exercises = muestra 2 {key:valor} de exercises
                    // console.log(obje_exercises) // muestra 2 {key:valor} de exercises

                    Object.keys(obje_exercises).map(eleExercises =>{ // [] mapea cada eleExercises                   
                        const exercises = obje_exercises[eleExercises] ; //ingreso (eleExercises) = muestra 2 {key : valor}
                        // console.log(exercises); // = muestra 2 {key : valor}
                        
                        if(exercises.hasOwnProperty("completed")){//true
                            // console.log(exercises.completed)
                            totalExercises += 1; // le sumamos 1 para saber cuantas realizo
                            completedExercises += exercises.completed; // sumamos y guardamos (exercises-completed)
                        }
                    })          
                }
            })
        })

    // Math.round() retorna el valor de un número redondeado al entero más cercano.
    // formula para el porcentaje del avance del alumno
    percentExercises = Math.round((completedExercises / totalExercises) * 100)+"%";  

        // console.log(totalExercises)
        // console.log(completedExercises)
        // console.log(percentExercises)

        return ({ // retornando el nuevo objeto con las 3 propiedades por alumno
            
                        'total'       :   totalExercises,
                        'completed'   :   completedExercises,
                        'percent'     :   percentExercises      
        });
    };
        







    /**  funciones de calculos **/
    const calcularQuizzes = (objCoursesUserId) => { //{objeto con 3 courses completos}
        console.log(objCoursesUserId);

        let totalQuizzes = 0;
        let completedQuizzes = 0;
        let percentQuizzes= '';
        let scoreSumQuizzes = 0;
        let scoreAvgQuizzes = 0;

        const arrCourses = Object.keys(objCoursesUserId) // [ keys 3 courses]
        // console.log(arrCourses);
       
        arrCourses.map(eleCourse =>{ 
            const objGeneral_6_keysCaUnoCourses = objCoursesUserId[eleCourse]; // {3 courses completos} ingresa c/u (eleCourse) = muestra 3 {6 keys} por course 
            // console.log(objGeneral_6_keysCaUnoCourses); // muestra 3 {6 keys} por course

            // console.log(objGeneral_6_keysCaUnoCourses.parts); //ingresa (parts) c/u course = muestra 1er-parts{5 keys}, 2er-parts {4 keys}, 3er-parts {7 keys} 

            Object.keys(objGeneral_6_keysCaUnoCourses.parts).map(elePart =>{ // [] mapea cada elePart 

                const objKeyValorCaUnoCourses = objGeneral_6_keysCaUnoCourses.parts[elePart]; // ingresa (parts), ingresa c/u (elePart)  = muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}
                console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                if(objKeyValorCaUnoCourses.hasOwnProperty('type')) {
                    const type = objKeyValorCaUnoCourses.type
                    // console.log(type); 

                    if (type == 'quiz') {
                        const quizzes = type
                        // console.log(quizzes); 

                        if(objKeyValorCaUnoCourses.hasOwnProperty('completed')) {
                            const completed = objKeyValorCaUnoCourses.completed
                            // console.log(completed); 

                            if(objKeyValorCaUnoCourses.hasOwnProperty('score')) {
                                const score = objKeyValorCaUnoCourses.score
                                // console.log(score); 

                                // totalExercises += 1; // le sumamos 1 para saber cuantas realizo
                                // completedExercises += exercises.completed; // sumamos y guardamos (exercises-completed)
                                




                                

                                // if(objKeyValorCaUnoCourses.hasOwnProperty('exercises')){//true si tiene la propiedad exercises
                                //     const obje_exercises = objKeyValorCaUnoCourses.exercises ; // ingresa de propiedad exercises de exercises = muestra 2 {key:valor} de exercises
                                //     // console.log(obje_exercises) // muestra 2 {key:valor} de exercises
                
                                //     Object.keys(obje_exercises).map(eleExercises =>{ // [] mapea cada eleExercises                   
                                //         const exercises = obje_exercises[eleExercises] ; //ingreso (eleExercises) = muestra 2 {key : valor}
                                //         // console.log(exercises); // = muestra 2 {key : valor}
                                        
                                //         if(exercises.hasOwnProperty("completed")){//true
                                //             // console.log(exercises.completed)
                                            
                                //         }
                
                                //     })          
                                
                                // }
        
                            }    
                        }
                    }
                }
            })
        })

    // Math.round() retorna el valor de un número redondeado al entero más cercano.
    // formula para el porcentaje del avance del alumno
    // percentQuizzes = Math.round((completedExercises / totalQuizzes) * 100)+"%";  

    // console.log(totalQuizzes)
    // console.log(completedExercises)
    // console.log(percentExercises)

    return ({ // retornando el nuevo objeto con las 3 propiedades por alumno
            
                        'total'        :   totalQuizzes,
                        'completed'    :   completedQuizzes,
                        'percent'      :   percentQuizzes,     
                        'scoreSum'     :   scoreSumQuizzes,  
                        'scoreAvg'     :   scoreAvgQuizzes                  
    });
    };











    /** iteramos arrOnlyStudents  **/
  
    const usersWithStats = arrOnlyStudents.map(eleOnlyStudents => {   
        
        // objProgress[eleStudents.id]["intro"]
        if(objProgress[eleOnlyStudents.id].hasOwnProperty("intro")){//true

            names = eleOnlyStudents.name.toUpperCase()
            percents = objProgress[eleOnlyStudents.id].intro.percent;
            // console.log(percents)//muestra el valor de percents
    
            newObjExercises = calcularExercisesPractice(objProgress[eleOnlyStudents.id].intro.units); // llamando a la funcion del calculo de los exercises,  {objeto con 3 propiedades courses completos}
            newObjQuizzes = calcularQuizzes(objProgress[eleOnlyStudents.id].intro.units);
            // exercises = calcularExercises(objProgress[eleOnlyStudents.id], 'read');
            // exercises = calcularExercises(objProgress[eleOnlyStudents.id], 'quiz');
            //  let reads = calcularReads(usersProgress, 'read');
            //  let quizzes = calcularQuizzes(usersProgress, 'quiz');
            }

                return ({ //retornado el objeto total del Stats por alumno , cvon todas las propiedades solicitadas
                        'name'              :    names,          
                        'stats'             : {
                                            'percent'   : percents,
                                            'exercises' : newObjExercises, //agregando las 3 propiedades del exercises por alumno
                                        //    'reads'      : newObjReads,
                                        //    'quizzes'    : newObjQuizzes
                        }, 
                });
    }); 





    // console.log(usersWithStats)
   
        //  const totalParts = 0;
        //  const completedParts = 0;
        //  const totalDuration = 0;
        //  const completedDuration = 0;
        //  const totalParts = 0;
        //  const totalParts = 0;
    return usersWithStats;



}







        // const stats = {

        //     userid:   user.id,
        //     name:   user.name,
            
        //     stats   : { 
        //                 percent     :  totalPercent(user),  
            
        //                 exercises   : {
        //                                 total       :   hhh(),
        //                                 completed   :   completedExercises(),
        //                                 percent     :   percentExercises(),
        //                               },
        //                 reads       : {
        //                                 total       :   totalReads(),
        //                                 completed   :   completedReads(),
        //                                 percent     :   percentReads(),       
        //                                },      
        //                 quizzes     : {
        //                                 total       :   totalQuizzes(), 
        //                                 completed   :   completedQuizzes(),
        //                                 percent     :   percentQuizzes(),
        //                                 scoreSum    :   scoreSumQuizzes(),
        //                                 scoreAvg    :   scoreAvgQuizzes(),
        //                               }
        //    }
        // }
        
    window.sortUsers = (users, orderBy, orderDirection) => {
        // console.log(users, orderBy, orderDirection)



        // const ordenandoName = users.sort((ele1, ele2) => {
        //     if (ele1 > ele2) {
        //         return 1;
        //     }else if (ele1 < ele2) {
        //         return -1;
        //     }else { 
        //         return 0;
        //     }
        // });



    }
    
    window.filterUsers = (users, search) => { 

        if(search!=='todo'){
            return  users.filter(ele => ele.name == search)
        }
     return  users ;
    }

 
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

        let newUserFilter = filterUsers(options.cohortData.users, options.search)
    //    console.log(newUserFilter)

        // sortUsers(newUserFilter, options.orderBy, options.orderDirection)
        // console.log(newUserFilter)

        let students = computeUsersStats(newUserFilter, options.cohortData.progress, arrayCourses);
         
        // console.log(students)
        return students;     

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
    //   console.log(search());
    




        // /** los name **/
        // let arrOnlyStudents = arrayUsers.filter(user => user.signupCohort === 'lim-2018-03-pre-core-pw');
        // // console.log(arrOnlyStudents)//726 estudiantes
        // const onlyName = arrOnlyStudents.map(user1 => user1.name);//retorna los nombres
        // // console.log(onlyName)
        // const ordenandoName = onlyName.sort((ele1, ele2) => {
        //       if (ele1 > ele2) {
        //           return 1;
        //       }else if (ele1 < ele2) {
        //           return -1;
        //       }else { 
        //           return 0;
        //       }
        //   });
        //   // console.log(ordenandoName);//lista de nombres ordenado
        // }
        //   const selectName = document.getElementById('listaName');
        //   let listaUsuarios = '';
        //   ordenandoName.map(user2 => {
        //       listaUsuarios  +=`<option value=${user2}>${user2}</option>`;
        //   })
        //   selectName.innerHTML = listaUsuarios
        // }
