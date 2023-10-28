export class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  introduce() {
    console.log(`
  EmpName:${this.name}
  EmpId:${this.id}
  `);
  }
}
export default Employee;
