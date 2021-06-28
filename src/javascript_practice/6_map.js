const instructors = [
    {name:'Quincy', specialty: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 1},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 1},
    {name: 'Paul', specialty: 'Entomology', medals: 1},
];

// let instructor_names = [];

// instructors.forEach(instructor => {
//     instructor_names.push(instructor.name);
// });

// console.log(instructor_names);

// using map() function'
const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

// Map with Object inside of array
let kvArray = [
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];

console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
})


