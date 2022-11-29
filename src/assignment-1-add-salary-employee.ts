// adding salary to employees object using interface
interface EmployeeInterface {
  name: string;
  age: number;
  salary?: number;
}

const employee = {
  name: 'John',
  age: 34,
};

function addSalaryToEmployee(employee: EmployeeInterface, salary: number): EmployeeInterface {
  const newEmployee = {...employee};
  newEmployee.salary = salary;

  return newEmployee;
}
console.log(addSalaryToEmployee(employee, 250000));
