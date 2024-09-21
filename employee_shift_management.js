//Task1: Create an Employees Array of Employee Objects
const employees = [
{ name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
{ name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] }, 
{ name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
{ name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }    
];

//Task2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee){
console.log(`Employe:${employee.name}`);
console.log(`Shifts:${employee.shifts}`);
}
displayEmployeeShifts(employees[0])

//Task3: Create a Function to Assign a New Shift
function assignShift(name, day, hours){
let employee = employees.find(employ => employ.name === name);
let days = employees.find(days => days.name === day);
let hour = employees.find(hour => hour.name === hours);
if(employee,days,hour){
console.log(`Employee${employee} already assigned.`);
}
else{
console.log(`Error`)
}
}
assignShift(John, Monday, 8)
