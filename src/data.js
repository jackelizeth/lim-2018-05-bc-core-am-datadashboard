window.computeUsersStats = (users, progress, courses) => {
    const objProgress = progress;
    courses;
    const arrOnlyStudents = users.filter(eleUser => eleUser.signupCohort === 'lim-2018-03-pre-core-pw');
    //    console.log(arrOnlyStudents);//726 estudiantes

    /**  funciones calcularExercisesPractice **/
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
    /**  funciones calcularReads **/
    const calcularReads = (objCoursesUserId) => { //{objeto con 3 courses completos}
        // console.log(objCoursesUserId);

        let totalReads = 0;
        let completedReads = 0;
        let percentReads = '';
       
        const arrCourses = Object.keys(objCoursesUserId) // [ keys 3 courses]
        // console.log(arrCourses);
       
        arrCourses.map(eleCourse =>{
            const objGeneral_6_keysCaUnoCourses = objCoursesUserId[eleCourse]; // {3 courses completos} ingresa c/u (eleCourse) = muestra 3 {6 keys} por course 
            // console.log(objGeneral_6_keysCaUnoCourses); // muestra 3 {6 keys} por course

            // console.log(objGeneral_6_keysCaUnoCourses.parts); //ingresa (parts) c/u course = muestra 1er-parts{5 keys}, 2er-parts {4 keys}, 3er-parts {7 keys} 

            Object.keys(objGeneral_6_keysCaUnoCourses.parts).map(elePart =>{ // [] mapea cada elePart 

                const objKeyValorCaUnoCourses = objGeneral_6_keysCaUnoCourses.parts[elePart]; // ingresa (parts), ingresa c/u (elePart)  = muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}
                // console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                // console.log("fuera de read : "+objKeyValorCaUnoCourses);   
                if( objKeyValorCaUnoCourses.hasOwnProperty('type') && objKeyValorCaUnoCourses.type  == 'read') {
                  
                        totalReads++; // se encarga de contar cuantos quiz encuentra cada vez que entra a la condicion IF
                        // console.log(totalReads); 
                        
                        completedReads += objKeyValorCaUnoCourses.completed //se encarga de acumular los quizes completados, segun su valor: 1=completado y 0= no completado
                        // console.log(completedReads);   
                
                } 
            })
        })

         
                // Math.round() retorna el valor de un número redondeado al entero más cercano.
                // formula para el porcentaje del avance del alumno
                percentReads = Math.round((completedReads / totalReads) * 100) + "%";  
                // console.log(percentReads);
                
        return ({ // retornando el nuevo objeto con las 3 propiedades por alumno
                        total:   totalReads,
                        completed:   completedReads,
                        percent:   percentReads,                
        });
    };

    /**  funciones calcularQuizzes **/
    const calcularQuizzes = (objCoursesUserId) => { //{objeto con 3 courses completos}
        // console.log(objCoursesUserId);

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
                // console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                if( objKeyValorCaUnoCourses.hasOwnProperty('type') && objKeyValorCaUnoCourses.type  == 'quiz') {
                  
                        totalQuizzes++; // se encarga de contar cuantos quiz encuentra cada vez que entra a la condicion IF
                        // console.log(totalQuizzes); 
                        
                        completedQuizzes += objKeyValorCaUnoCourses.completed //se encarga de acumular los quizes completados, segun su valor: 1=completado y 0= no completado
                        // console.log(completedQuizzes);   
                        
                        if( objKeyValorCaUnoCourses.completed == 1){     // si completado es igual a 1  entra          
                          
                            scoreSumQuizzes += objKeyValorCaUnoCourses.score // sumo total de puntuacion score del alumno por cada quiz completado
                                // console.log(scoreSumQuizzes);                                 
                        }
                }
            })
        })

        // Math.round() retorna el valor de un número redondeado al entero más cercano.
                // formula para el porcentaje del avance del alumno
                percentQuizzes = Math.round((completedQuizzes / totalQuizzes) * 100) + "%";  
                // console.log(percentQuizzes); 
                    // console.log(type); 
                    
                // Math.round() retorna el valor de un número redondeado al entero más cercano.    
                // promedio de puntuaciones en quizes completados
                scoreAvgQuizzes =  Math.round(scoreSumQuizzes / totalQuizzes)
                // console.log(scoreAvgQuizzes);

        return ({ // retornando el nuevo objeto con las 3 propiedades por alumno
                        total:   totalQuizzes,
                        completed:   completedQuizzes,
                        percent:   percentQuizzes,     
                        scoreSum:   scoreSumQuizzes,  
                        scoreAvg:   scoreAvgQuizzes                  
        });
    };

    /** iteramos arrOnlyStudents  **/
    const usersWithStats = arrOnlyStudents.map(eleOnlyStudents => {   
        
        // objProgress[eleStudents.id]["intro"]
        if(objProgress[eleOnlyStudents.id].hasOwnProperty("intro")){//true

            names = eleOnlyStudents.name
            percents = objProgress[eleOnlyStudents.id].intro.percent;
            // console.log(percents)//muestra el valor de percents
    
            newObjExercises = calcularExercisesPractice(objProgress[eleOnlyStudents.id].intro.units); // llamando a la funcion del calculo de los exercises,  {objeto con 3 propiedades courses completos}
            newObjQuizzes = calcularQuizzes(objProgress[eleOnlyStudents.id].intro.units);
            newObjReads = calcularReads(objProgress[eleOnlyStudents.id].intro.units);
            }
            return ({ //retornado el objeto total del Stats por alumno , cvon todas las propiedades solicitadas
                        name          :  names,
                        stats         :  { 
                                            percent   : percents,
                                            exercises : newObjExercises, //agregando las 3 propiedades del exercises por alumno
                                            reads     : newObjReads,
                                            quizzes   : newObjQuizzes
                        }, 
            });
    }); 


    return usersWithStats;
    // console.log(usersWithStats)
}
    
window.sortUsers = (users, orderBy, orderDirection ) => { 
        // console.log(users)
        // console.log(orderBy)
        // console.log(orderDirection)
        let ordenado ;

    if(orderBy ==='nombre'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='ASC'){

                if (ele1.name > ele2.name) {
                    return 1;
                }else if (ele1.name < ele2.name) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='DESC'){

                if (ele1.name > ele2.name) {
                    return -1;
                }else if (ele1.name < ele2.name) {
                    return 1;
                }else { 
                    return 0;
                }
                
            }
            
        });

    }     
        
    if(orderBy ==='porCompTotal'){

        ordenado = users.sort((ele1, ele2) => {

        if(orderDirection ==='DESC'){

                if (ele1.stats.percent > ele2.stats.percent) {
                    return 1;
                }else if (ele1.stats.percent < ele2.stats.percent) {
                    return -1;
                }else { 
                    return 0;
                }
            
        }else if(orderDirection ==='ASC'){


                if (ele1.stats.percent > ele2.stats.percent) {
                    return -1;
                }else if (ele1.stats.percent < ele2.stats.percent) {
                    return 1;
                }else { 
                    return 0;
                }
            }

        });

    }  


    if(orderBy ==='porEjerCorrAuto'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='DESC'){

                if (ele1.stats.exercises.percent > ele2.stats.exercises.percent) {
                    return 1;
                }else if(ele1.stats.exercises.percent < ele1.stats.exercises.percent) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='ASC'){

                if (ele1.stats.exercises.percent > ele2.stats.exercises.percent) {
                    return -1;
                }else if(ele1.stats.exercises.percent < ele1.stats.exercises.percent) {
                    return 1;
                }else { 
                    return 0;
                }

            }

        });

    }

    if(orderBy ==='porQuizCompl'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='DESC'){

                if (ele1.stats.quizzes.percent > ele2.stats.quizzes.percent) {
                    return 1;
                }else if(ele1.stats.quizzes.percent < ele1.stats.quizzes.percent) {
                    return -1;
                }else { 
                    return 0;
                }
                
            }else if(orderDirection ==='ASC'){

                if (ele1.stats.quizzes.percent > ele2.stats.quizzes.percent) {
                    return -1;
                }else if(ele1.stats.quizzes.percent < ele1.stats.quizzes.percent) {
                    return 1;
                }else { 
                    return 0;
                }

            }

        });

    }

    if(orderBy ==='punQuizzCompl'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='DESC'){

                if (ele1.stats.quizzes.scoreAvg > ele2.stats.quizzes.scoreAvg) {
                    return 1;
                }else if(ele1.stats.quizzes.scoreAvg < ele1.stats.quizzes.scoreAvg) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='ASC'){

                if (ele1.stats.quizzes.scoreAvg > ele2.stats.quizzes.scoreAvg) {
                    return -1;
                }else if(ele1.stats.quizzes.scoreAvg < ele1.stats.quizzes.scoreAvg) {
                    return 1;
                }else { 
                    return 0;
                }

            }

        });

    }

    if(orderBy ==='porLectComp'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='DESC'){

                if (ele1.stats.reads.percent > ele2.stats.reads.percent) {
                    return 1;
                }else if(ele1.stats.reads.percent < ele1.stats.reads.percent) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='ASC'){

                if (ele1.stats.reads.percent > ele2.stats.reads.percent) {
                    return -1;
                }else if(ele1.stats.reads.percent < ele1.stats.reads.percent) {
                    return 1;
                }else { 
                    return 0;
                }
            }

        });

    }
 return ordenado;
}   

window.filterUsers = (users, search) => { 
    //     console.log(users)
    if(search!==''){
       // return  users.filter(ele => (ele.name.toUpperCase().indexOf(search.toUpperCase())) !== -1)
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
    let arrayCourses = Object.keys(options.cohort[0].coursesIndex);
    // console.log(arrayCourses)
    
    let users = filterUsers(options.cohortData.users, options.search)
    users = computeUsersStats(users, options.cohortData.progress, arrayCourses);
    users = sortUsers(users, options.orderBy, options.orderDirection);

    // console.log(users, options.orderBy, options.orderDirection)
    return users;     
}

