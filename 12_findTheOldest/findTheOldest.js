const findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson)=>{
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        
        return currentAge > oldestAge ? currentPerson : oldest
    })
};

const getAge = function (birth, death){
    if(!death){
        death = 2023;
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
