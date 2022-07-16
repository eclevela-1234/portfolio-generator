// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//     name: 'Eliot',
//     age: 36
// };

// personObj.age = 37;
// personObj.occupation = "Developer"

var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = (profileDataArr) => {
    for (let i=0; i <profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log("==========================");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);

