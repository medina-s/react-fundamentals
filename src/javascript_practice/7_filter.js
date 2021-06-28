const instructors = [
    {name:'Quincy', specialty: 'Quantam Mechanics', medals: 7},
    {name: 'Kenn', specialty: 'Norse Mythology', medals: 1},
    {name: 'Carolyn', specialty: 'Kung Fu', medals: 1},
    {name: 'Paul', specialty: 'Entomology', medals: 1},
];

let instructor_names = [];

for(let i = 0; i<instructors.length; i++) {
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}

console.log(instructor_names);
//  Another way of doing that with filters

const instructorNames = instructors.filter(instructors => instructors.medals >= 5);
console.log(instructorNames);