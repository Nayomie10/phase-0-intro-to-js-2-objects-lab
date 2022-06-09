// Write your solution in this file!
var employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value){
    

    var updatedEmployee = Object.assign({}, employee, {[key]: value});
    return updatedEmployee;
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var employee1 = Object.assign({}, employee);
    delete employee1[key];
    return employee1;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }