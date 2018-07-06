window.computeUsersStats = (users, progress, courses) => {
    // const arrayUsers = users;
    const objProgress = progress;
    // const arrayCourses = courses;

    const arrayProgress = Object.keys(objProgress);
    console.log(arrayProgress);


 



//   let usersWithStats = users.map(user => {



//     return NuevoUsuarioStats(user, progress[user.id], courses);
    
//   });
//     return usersWithStats;

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
            
    window.sortUsers = (users, orderBy, orderDirection) => {
    
    }
    
    window.filterUsers = (users, search) => { 
    
    }
 
    window.processCohortData = (options) => {
        const arrayCourses = Object.keys(options.cohort[0].coursesIndex);
        // del objeto options de la propiedad de los cohort es coursesIndex
    
    // console.log(filterUsers(options.cohortData.users, options.search))
    
    // sortUsers(options.cohortData.users, options.orderBy, options.orderDirection)
    
        computeUsersStats(options.cohortData.users, options.cohortData.progress, arrayCourses);
    }
