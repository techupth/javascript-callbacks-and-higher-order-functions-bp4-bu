// Exercise #1: For Each Function



function forEach(array,salaryadd,operation) {
  return operation(array,salaryadd)
}
function addSalary(array,salaryadd){
  let salarynew = [];
  for(let key of array){
    salarynew.push(key+5000)
  }
  return salarynew;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here

newEmployeeSalaries = forEach(employeeSalaries,5000, addSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]


