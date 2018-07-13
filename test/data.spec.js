describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });

 describe('computeUsersStats(users, progress, courses)', () => {

    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);

      const arrLengthCheck = users.length === processed.length ||
      users.filter(u => u.role === 'student').length === processed.length;
      assert.isOk(arrLengthCheck)
      
      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 0,
          percent: 0,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreAvg: 29,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {
    let user1 = {
      stats: {

        name       : 'zurisadai',
        percent: 100,
        exercises  : { 
          total    :   2,
         completed :   2,
         percent   :  100   
        },
        reads      : {
          total    :   11,
          completed:   11,
          percent  :   100
        },
        quizzes   : {
          total   :   3,
          completed:  3,
          percent  :  100,     
          scoreSum :  242,  
          scoreAvg :  81  
        }

      }  
    }

    let user2 = {
      stats: {

        name: 'ailim',
        percent: 100,
        exercises  : { 
          total    :   2,
         completed :   2,
         percent   :  100   
        },
        reads: {
          total    :   11,
          completed:   11,
          percent  :   100
        },
        quizzes   : {
          total   :   3,
          completed:  3,
          percent  :  100,     
          scoreSum :  263,  
          scoreAvg :  88  
        }

      }  
    } 

    let user3 = {
      stats: {

        name: 'allison',
        exercises: { 
          total:   2,
         completed :   1,
         percent   :  50   
        },
        reads      : {
          total    :   11,
          completed:   8,
          percent  :   73
        },
        quizzes: {
          total:   3,
          completed:  2,
          percent  :  67,     
          scoreSum :  170,  
          scoreAvg :  57
        }

      }  
    } 
    let users = [user1,user2,user3];

    it('debería retornar arreglo de usuarios ordenado por nombre ASC' , () =>{
      assert.deepEqual(window.sortUsers(users,'nombre','ASC'),[user2,user3,user1])
        });

    it('debería retornar arreglo de usuarios ordenado por nombre DESC' , () =>{
      assert.deepEqual(window.sortUsers(users,'nombre','DESC'),[user1,user3,user2])
        });
    
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC' , () =>{
      assert.deepEqual(window.sortUsers(users,'porCompTotal','ASC'),[user2,user3,user1])
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', () =>{
      assert.deepEqual(window.sortUsers(users,'porCompTotal','DESC'),[user1,user3,user2])
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () =>{
      assert.deepEqual(window.sortUsers(users,'porEjerCorrAuto','ASC'),[user2,user3,user1])
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () =>{
      assert.deepEqual(window.sortUsers(users,'porEjerCorrAuto','DESC'),[user1,user3,user2])
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC',() =>{
      assert.deepEqual(window.sortUsers(users,'porQuizCompl','ASC'),[user2,user3,user1])
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC', () =>{
      assert.deepEqual(window.sortUsers(users,'porQuizCompl','DESC'),[user1,user3,user2])
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC',() =>{
      assert.deepEqual(window.sortUsers(users,'punQuizzCompl','ASC'),[user2,user3,user1])
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC',() =>{
      assert.deepEqual(window.sortUsers(users,'punQuizzCompl','DESC'),[user1,user3,user2])
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', () =>{
      assert.deepEqual(window.sortUsers(users,'porLectComp','ASC'),[user2,user3,user1])
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC', () =>{
      assert.deepEqual(window.sortUsers(users,'porLectComp','DESC'),[user1,user3,user2])

    });
  });

  describe('filterUsers(users, filterBy)', () => {
    let user1 = {
      stats: {

        name       : 'zurisadai',
        percent: 100,
        exercises  : { 
          total    :   2,
         completed :   2,
         percent   :  100   
        },
        reads      : {
          total    :   11,
          completed:   11,
          percent  :   100
        },
        quizzes   : {
          total   :   3,
          completed:  3,
          percent  :  100,     
          scoreSum :  242,  
          scoreAvg :  81  
        }

      }  
    }

    let user2 = {
      stats: {

        name: 'ailim',
        percent: 100,
        exercises  : { 
          total    :   2,
         completed :   2,
         percent   :  100   
        },
        reads: {
          total    :   11,
          completed:   11,
          percent  :   100
        },
        quizzes   : {
          total   :   3,
          completed:  3,
          percent  :  100,     
          scoreSum :  263,  
          scoreAvg :  88  
        }

      }  
    } 

    let user3 = {
      stats: {

        name: 'allison',
        exercises: { 
          total:   2,
         completed :   1,
         percent   :  50   
        },
        reads      : {
          total    :   11,
          completed:   8,
          percent  :   73
        },
        quizzes: {
          total:   3,
          completed:  2,
          percent  :  67,     
          scoreSum :  170,  
          scoreAvg :  57
        }

      }  
    } 
    let users = [user1,user2,user3];

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)',() =>{
    assert.deepEqual(window.filterUsers(users,'ai'),[user1,user3])

      });

  }); 

   describe('processCohortData({cohortData, orderBy, orderDirection, filterBy })', () => {

    const options = {
      cohort         : fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw'), 
      cohortData     : fixtures,
      orderBy        : 'name',
      orderDirection : 'ASC',
      search         : 'allison'
  };

    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter',() => {
      assert.deepEqual(window.processCohortData(options).length,2)
           }); 
      });
  });

  