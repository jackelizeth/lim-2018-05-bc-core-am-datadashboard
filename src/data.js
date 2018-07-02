window.computeUsersStats = (users, progress, courses) => {
    
console.log(users);
console.log(progress);
console.log(courses);


   
    const usersWithStats = users.map(user => {
    const stats = {
    // //     // userid:   user.id,
    // //     // name:   user.name,
    //     stats   :   { 
    //                 percent     :   
        
    //                 exercises   :  {
    //                                 total       :   
    //                                 completed   :   completedExercises(),
    //                                 percent     :   percentExercises(),
    //                                },
        
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
                }

                

    // console.log(stats);

    });

}

window.sortUsers = (users, orderBy, orderDirection) => {

}

window.filterUsers = (users, search) => { 

        const nuevoUsers = users.filter((ele) => {return ele.name == search});
        return nuevoUsers;   
}


window.processCohortData = (options) => {

console.log(filterUsers(options.cohortData.users, options.search))

// sortUsers(options.cohortData.users, options.orderBy, options.orderDirection)

// computeUsersStats(options.cohortData.users, options.cohortData.progress, options.cohort)
    
 
}
