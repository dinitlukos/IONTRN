const faker = require('faker');
// const employeeList = [
//     {
//       emp_no: 1234,
//       first_name: 'Dinit',
//       last_name: 'Lukose',
//       city: 'Idukki'
//     },
//     {
//       emp_no: 1455,
//       first_name: 'Ram',
//       last_name: 'Renathunga',
//       city: 'Hydrabad'
//     },
//     {
//       emp_no: 1678,
//       first_name: 'LP Venkat',
//       last_name: 'Sambhavan',
//       city: 'Banglore'
//     },
//   ];

let listOfEmployee = [];
for(let i=0; i<10; i++){
    let newObj = {
        id: faker.random.number(1000),
        emp_no: faker.random.alphaNumeric(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        city: faker.address.city()
    }
    listOfEmployee.push(newObj);
}


module.exports = listOfEmployee;