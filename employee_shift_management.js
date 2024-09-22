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
employee.shifts.forEach(shift => {
console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
})}
displayEmployeeShifts(employees[0])

//Task3: Create a Function to Assign a New Shift
function assignShift(name, day, hours){
let employee = employees.find(employ => employ.name === name);
employee.shifts.forEach(shift => {
employee.shifts.find(da => da.day === day);
employee.shifts.find(ho => ho.hours === hours);
if(employee,day,hours){
console.log(`Employee${employee} already assigned.Time is ${day} and ${hours}`);
}
else{
employee.shifts.push({day: day, hours: hours});
console.log(`New shift assigned ${day} and  ${hours}`);
}
})};
assignShift('John', 'Monday', 8)

//Task 4:Create a Function to Calculate Total Hours Worked
function calculateTotalHours(name){
let totalhours = employees.shifts.reduce((sum, shift) => sum + shift.hours, 0);
let employee = employees.find(employ => employ.name === name);
if(employee){
console.log(`Employee${employee} need work ${totalhours}.`)
}
}
calculateTotalHours('John');

//Task 5:Create a Function to List Employees with Free Days
function listAvailableEmployees(day){
//So hard:(
}