window.computeUsersStats = (users, progress, courses) => {
    const arrayUsers = users;
    const objProgress = progress;
    const arrayCourses = courses;

 










    
    window.processCohortData = (options) => {
        const arrayCourses = Object.keys(options.cohort[0].coursesIndex);
        // del objeto options de la propiedad de los cohort es coursesIndex
        
    
    // console.log(filterUsers(options.cohortData.users, options.search))
    
    // sortUsers(options.cohortData.users, options.orderBy, options.orderDirection)
    
        computeUsersStats(options.cohortData.users, options.cohortData.progress, arrayCourses);
    }
}