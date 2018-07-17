window.computeUsersStats = (users, progress, courses) => {
    const objProgress = progress;
    courses;

    /** filter al array users **/
    const arrOnlyStudents = users.filter(eleUser => eleUser.signupCohort === 'lim-2018-03-pre-core-pw');
    // console.log(arrOnlyStudents);//726 estudiantes

    /**  funciones calcularExercisesPractice **/
    const calcularExercisesPractice = (objCoursesUserId) => { 
        // console.log(objCoursesUserId);//objCoursesUserId = {objeto con 3 courses completos}

        let totalExercises = 0;
        let completedExercises = 0;
        let percentExercises = 0;

        const arrCourses = Object.keys(objCoursesUserId) // [ keys 3 courses]
        
        arrCourses.map(eleCourse =>{ // cada nombre de los 3 courses

        const objGeneral_6_keysCaUnoCourses = objCoursesUserId[eleCourse]; // muestra 3 {6 keys} por course 
        // console.log(objGeneral_6_keysCaUnoCourses); // muestra 3 {6 keys} por course

        // console.log(objGeneral_6_keysCaUnoCourses.parts); muestra 1-parts{5 keys}, 1-parts{4 keys}, 1-parts{7 keys} 
        Object.keys(objGeneral_6_keysCaUnoCourses.parts).map(elePart =>{
            const objKeyValorCaUnoCourses = objGeneral_6_keysCaUnoCourses.parts[elePart];// muestra 5{keys:valor}, 4{keys:valor}, 7{keys:valor}
                // console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                if(objKeyValorCaUnoCourses.hasOwnProperty('exercises')){//true 
                    const obje_exercises = objKeyValorCaUnoCourses.exercises; // muestra 2 {key:valor} de exercises
                    // console.log(obje_exercises) // muestra 2 {key:valor} de exercises

                    Object.keys(obje_exercises).map(eleExercises =>{                  
                        const exercises = obje_exercises[eleExercises] ; // muestra 2 {key : valor}
                        // console.log(exercises); // = muestra 2 {key : valor}
                        
                        if(exercises.hasOwnProperty("completed")){//true
                            // console.log(exercises.completed)
                            
                            // totalExercises = totalExercises + 1; 
                            totalExercises++; // suma el total de exercises que son 2
                            completedExercises += exercises.completed; // sumamos y guardamos (exercises-completed)
                            // console.log(totalExercises)
                        }
                    })          
                }
            })
        })
        // isNaN = esto No es un Numero
        // !isNaN = '!' lo contrario = esto es un numero
        if(!isNaN(completedExercises / totalExercises)){//true

            // formula para el PROCENTAJE (%) del avance del alumno
            // Math.round() retorna el valor de un número redondeado al entero más cercano.
            percentExercises = Math.round((completedExercises / totalExercises) * 100);  
            // console.log(percentExercises)
        }

            return ({ // retornando el nuevo objeto con las 3 propiedades por alumno
                
                            'total'       :   totalExercises,
                            'completed'   :   completedExercises,
                            'percent'     :   percentExercises      
            });
    };

    /**  funciones calcularReads **/
    const calcularReads = (objCoursesUserId) => { 
        // console.log(objCoursesUserId);//objCoursesUserId = {objeto con 3 courses completos}

        let totalReads = 0;
        let completedReads = 0;
        let percentReads = 0;
       
        const arrCourses = Object.keys(objCoursesUserId) // [ keys 3 courses]
        // console.log(arrCourses);
       
        arrCourses.map(eleCourse =>{// cada nombre de los 3 courses

            const objGeneral_6_keysCaUnoCourses = objCoursesUserId[eleCourse]; //muestra 3 {6 keys} por course 
            // console.log(objGeneral_6_keysCaUnoCourses); // muestra 3 {6 keys} por course

            // console.log(objGeneral_6_keysCaUnoCourses.parts); //muestra 1-parts{5 keys}, 1-parts {4 keys}, 1-parts {7 keys} 
            Object.keys(objGeneral_6_keysCaUnoCourses.parts).map(elePart =>{ 
                const objKeyValorCaUnoCourses = objGeneral_6_keysCaUnoCourses.parts[elePart]; // muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}
                // console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                if( objKeyValorCaUnoCourses.hasOwnProperty('type') && objKeyValorCaUnoCourses.type  == 'read') {
                  
                        totalReads++; // se encarga de contar cuantos quiz encuentra cada vez que entra a la condicion IF
                        // console.log(totalReads); 
                
                        completedReads += objKeyValorCaUnoCourses.completed //acumula los quizes completados
                        // console.log(completedReads);   
                } 
            })
        })
                // formula para el PROCENTAJE (%) del avance del alumno
                percentReads = Math.round((completedReads / totalReads) * 100) ;  
                
        return ({ // retornando el nuevo objeto con las 3 propiedades por alumno
                        total:   totalReads,
                        completed:   completedReads,
                        percent:   percentReads,                
        });
    };

    /**  funciones calcularQuizzes **/
    const calcularQuizzes = (objCoursesUserId) => { 
        // console.log(objCoursesUserId);//objCoursesUserId = {objeto con 3 courses completos}

        let totalQuizzes = 0;
        let completedQuizzes = 0;
        let percentQuizzes= 0;
        let scoreSumQuizzes = 0;
        let scoreAvgQuizzes = 0;

        const arrCourses = Object.keys(objCoursesUserId) // [ keys 3 courses]
        // console.log(arrCourses);
       
        arrCourses.map(eleCourse =>{// cada nombre de los 3 courses

            const objGeneral_6_keysCaUnoCourses = objCoursesUserId[eleCourse]; // muestra 3 {6 keys} por course 
            // console.log(objGeneral_6_keysCaUnoCourses); // muestra 3 {6 keys} por course

            // console.log(objGeneral_6_keysCaUnoCourses.parts); //muestra 1-parts{5 keys}, 1-parts {4 keys}, 1-parts {7 keys} 
            Object.keys(objGeneral_6_keysCaUnoCourses.parts).map(elePart =>{
                const objKeyValorCaUnoCourses = objGeneral_6_keysCaUnoCourses.parts[elePart]; // muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}
                // console.log(objKeyValorCaUnoCourses); //muestra 5{keys:valor} 4{keys:valor} 7{keys:valor}

                if( objKeyValorCaUnoCourses.hasOwnProperty('type') && objKeyValorCaUnoCourses.type  == 'quiz') {
                  
                    totalQuizzes++; // se encarga de contar cuantos quiz encuentra cada vez que entra a la condicion IF
                    // console.log(totalQuizzes); 
                        
                    completedQuizzes += objKeyValorCaUnoCourses.completed //se encarga de acumular los quizes completados
                    // console.log(completedQuizzes);   
                        
                    if( objKeyValorCaUnoCourses.completed == 1){ // si completado es igual a 1  entra          
                          
                        // scoreSumQuizzes suma score = (PUNTUACION) del alumno por cada quiz completado
                        scoreSumQuizzes += objKeyValorCaUnoCourses.score 
                        // console.log(scoreSumQuizzes);                                 
                    }
                }
            })
        })
        // formula para el PROCENTAJE (%) del avance del alumno
         percentQuizzes = Math.round((completedQuizzes / totalQuizzes) * 100) ;  
        // console.log(percentQuizzes); 
        
        // scoreAvgQuizzes es PROMEDIO de puntuaciones en quizes completados
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

    /** iteramos arrOnlyStudents solo a las 726 estudiantes **/
    const usersWithStats = arrOnlyStudents.map(eleOnlyStudents => {   
        
        // objProgress[eleStudents.id]["intro"]
        // si del objProgress de cada users de su id tiene intro
        if(objProgress[eleOnlyStudents.id].hasOwnProperty("intro")){//true

            names = eleOnlyStudents.name//muestra como valor los nombres
            // console.log(names)

            // del objProgress[eleOnlyStudents.id] ingresando a intro y a su percent
            percents = objProgress[eleOnlyStudents.id].intro.percent;//muestra como valor el percents
            // console.log(percents)

            // llamando a la funcion del calculo exercises, quizzes y reads
            newObjExercises = calcularExercisesPractice(objProgress[eleOnlyStudents.id].intro.units); 
            newObjQuizzes = calcularQuizzes(objProgress[eleOnlyStudents.id].intro.units);
            newObjReads = calcularReads(objProgress[eleOnlyStudents.id].intro.units);
            // console.log(objProgress[eleOnlyStudents.id].intro.units)//muestra como valor {objeto con 3 courses completos}
            }
            // console.log(newObjExercises)
            // console.log(newObjQuizzes)
            // console.log(newObjReads)
            
            return ({ //retornado el objeto total del Stats por alumno , con todas las propiedades solicitadas
                        name          :  names,                       
                        stats         :  { 
                                            percent   : percents,// percents general por alumno
                                            exercises : newObjExercises, //3 propiedades del exercises por alumno
                                            reads     : newObjReads, //3 propiedades del reads por alumno
                                            quizzes   : newObjQuizzes //5 propiedades del quizz por alumno
                                        }, 
            });  
    }); 
    return usersWithStats;
    // console.log(usersWithStats)
}
    
window.sortUsers = (users, orderBy, orderDirection ) => { 
   
    let ordenado ;

    if(orderBy ==='nombre'){

        //El método sort() ordena los elementos de un array localmente y devuelve el array
        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='ASC'){

                if (ele1.name > ele2.name) {
                    return 1;//ele1.name es mayor que "0" osea 1
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

        if(orderDirection ==='ASC'){

                if (ele1.stats.percent > ele2.stats.percent) {
                    return 1;
                }else if (ele1.stats.percent < ele2.stats.percent) {
                    return -1;
                }else { 
                    return 0;
                }
            
        }else if(orderDirection ==='DESC'){


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
            
            if(orderDirection ==='ASC'){

                if (ele1.stats.exercises.percent > ele2.stats.exercises.percent) {
                    return 1;
                }else if(ele1.stats.exercises.percent < ele2.stats.exercises.percent) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='DESC'){

                if (ele1.stats.exercises.percent > ele2.stats.exercises.percent) {
                    return -1;
                }else if(ele1.stats.exercises.percent < ele2.stats.exercises.percent) {
                    return 1;
                }else { 
                    return 0;
                }
            }
        });
    }

    if(orderBy ==='porQuizCompl'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='ASC'){

                if (ele1.stats.quizzes.percent > ele2.stats.quizzes.percent) {
                    return 1;
                }else if(ele1.stats.quizzes.percent < ele2.stats.quizzes.percent) {
                    return -1;
                }else { 
                    return 0;
                }
                
            }else if(orderDirection ==='DESC'){

                if (ele1.stats.quizzes.percent > ele2.stats.quizzes.percent) {
                    return -1;
                }else if(ele1.stats.quizzes.percent < ele2.stats.quizzes.percent) {
                    return 1;
                }else { 
                    return 0;
                }
            }
        });
    }

    if(orderBy ==='punQuizzCompl'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='ASC'){

                if (ele1.stats.quizzes.scoreAvg > ele2.stats.quizzes.scoreAvg) {
                    return 1;
                }else if(ele1.stats.quizzes.scoreAvg < ele2.stats.quizzes.scoreAvg) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='DESC'){

                if (ele1.stats.quizzes.scoreAvg > ele2.stats.quizzes.scoreAvg) {
                    return -1;
                }else if(ele1.stats.quizzes.scoreAvg < ele2.stats.quizzes.scoreAvg) {
                    return 1;
                }else { 
                    return 0;
                }
            }
        });
    }

    if(orderBy ==='porLectComp'){

        ordenado = users.sort((ele1, ele2) => {

            if(orderDirection ==='ASC'){

                if (ele1.stats.reads.percent > ele2.stats.reads.percent) {
                    return 1;
                }else if(ele1.stats.reads.percent < ele2.stats.reads.percent) {
                    return -1;
                }else { 
                    return 0;
                }

            }else if(orderDirection ==='DESC'){

                if (ele1.stats.reads.percent > ele2.stats.reads.percent) {
                    return -1;
                }else if(ele1.stats.reads.percent < ele2.stats.reads.percent) {
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
 
    if(search !== ''){
       return  users.filter(ele => (ele.name.toUpperCase().indexOf(search.toUpperCase())) !== -1)
    }
    return  users ;
}

window.processCohortData = (options) => {
    // optionses un objeto
    // console.log(options)

    // options.cohort[0].coursesIndex = muestra {intro: y todo su contenido}
    let arrayCourses = Object.keys(options.cohort[0].coursesIndex);
    // console.log(arrayCourses)// muestra {intro: y todo su contenido}
    
    let users = filterUsers(options.cohortData.users, options.search)

    users = computeUsersStats(users, options.cohortData.progress, arrayCourses);

    users = sortUsers(users, options.orderBy, options.orderDirection);
    // console.log(users, options.orderBy, options.orderDirection)
    
    return users;     
}

