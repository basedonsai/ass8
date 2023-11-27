import employees from './ass8.js';

// 1. Hyd employees
const hydEmp = employees.filter(employee => employee.address.city==='hyderabad');
const empNames = hydEmp.map(employee => employee.name);

console.log("Employees who work in Hyderabad are:",empNames);

// 2. Name and address of employees aged between 40,50
const ageEmps = employees.filter(employee => employee.age >= 40 && employee.age <= 50);
const eNames = ageEmps.map(employee=>employee.name);
const empAddress = ageEmps.map(employee => employee.address);
console.log("Names and addresses of Employees ages between 40,50 are:")
console.log(eNames);
console.log(empAddress);

// 3. Employees not from Hyd
const notHyd = employees.filter(employee => employee.address.city!='hyderabad');
const emNames = notHyd.map(employee => employee.name);
console.log("Employees who aren't from Hyderabad are: ",emNames);

// 4. Employees with skill="reactjs"
const rEmp = employees.filter(employee => employee.skills.includes('reactjs'))
const rNames = rEmp.map(employee => employee.name);
console.log("Employees who are skilled at ReactJS are: ",rNames);