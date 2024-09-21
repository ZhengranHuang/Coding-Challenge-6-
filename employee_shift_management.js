//Task1: Create an Employees Array of Employee Objects
const employees = [
{ name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
{ name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] }, 
{ name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
{ name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }    
];

//Task2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee){
console.log(`Employe:${employee.name}`)
console.log(`Assigned shifts:${employee.shifts}`)
}
displayEmployeeShifts( employees[0])

