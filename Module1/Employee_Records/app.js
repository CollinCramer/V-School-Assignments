employees = []

function Employee (Name, Job, Salary, Status= "Full Time") {
    this.Name = Name;
    this.Job = Job;
    this.Salary = Salary;
    this.Status = Status;
    this.printEmployeeForm = function () {
        console.log(this.Name + " " + this.Job + " " + this.Salary + " " + this.Status);
    };

}


var emp1 = new Employee("Fred", "Assistant Manager", 32000, "Contract");
var emp2 = new Employee("Julian", "Chief Financial Officer", 85000);
var emp3 = new Employee("Kelsey", "Chief Executive Officer", 95000);

emp1.printEmployeeForm();
emp2.printEmployeeForm();
emp3.printEmployeeForm();

employees.push(emp1, emp2, emp3)
console.log(employees)