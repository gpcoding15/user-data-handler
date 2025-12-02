const filterUsersOlderThan24YearsOld = users => {
    let usersOlderThan24YearsOld = []
    for (let i = 0; i < users.length; i++) {
        if(users[i].age >= 25) {
            usersOlderThan24YearsOld.push(users[i])
        }
    }
    return usersOlderThan24YearsOld
};

const convertNamesToLowerCase = users => {
   const userNamesInLowerCase =  users.map((user) => user.name.toLowerCase());
   return userNamesInLowerCase
}

const verifyUserExistence = (users, userName) => {
    let doesUserExists = false;
    for (let i =0; i < users.length; i++) {
        if (users[i].name.includes(userName))
            doesUserExists = true
    };

    return doesUserExists
};

const getUsersWithEvenAge = users => {
    const usersWithPairAge = users.filter((user) => user.age % 2 === 0 ?? user );
    return usersWithPairAge

};

const getAgesAverage = users => {
    const agesAverage = users.reduce((average, user) => (average + user.age), 0)
    return agesAverage / users.length
};

const greetUser = (users, name) => {
    const user = users.find((user) => user.name === name )
    return user ? "Hello " + name : "User not founded"
};

const sortUsersByYoungerAge = users => {
    const usersByYoungerAge = users.sort((a,b) => a.age - b.age)
    return usersByYoungerAge
}
module.exports = {
    filterUsersOlderThan24YearsOld,
    convertNamesToLowerCase, 
    verifyUserExistence, 
    getUsersWithEvenAge, 
    getAgesAverage, 
    greetUser, 
    sortUsersByYoungerAge
};