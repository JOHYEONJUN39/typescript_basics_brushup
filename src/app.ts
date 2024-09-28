class Department {
  static fiscalYear = 2024;
  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return {name: name};
  }

  constructor(private readonly id: string, public name: string) {
    console.log(Department.fiscalYear)
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // 캡슐화 구현 (데이터나 관리를 은닉 및 보호)
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if(!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string): void {
      if (name === 'Max') {
        return;
      }
      this.employees.push(name);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Max']);
Math

const account = new AccountingDepartment('d2', []);

// account.addEmployee('Max');
// account.addEmployee('Manu');
// account.printEmployeeInformation();

account.mostRecentReport = 'Year End Report';
// account.addReport('Something went wrong...');
// account.addReport('Something went right...');
// account.addReport('Something went left...');
console.log(account.mostRecentReport);
// account.printReports();
// account.describe();

// it.addEmployee('Max');
// it.addEmployee('Manu');

// it.describe();
// it.printEmployeeInformation();

// console.log(it);
// console.log(account);