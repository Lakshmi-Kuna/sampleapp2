import { Employee } from "./employee";

export class Employer extends Employee {
  constructor(id, name, role) {
    super(id, name);
    this.role = role;
  }
  details() {
    console.log(
      `
      EmpName:${this.name},
      EmpId:${this.id},
      EmpRole:${this.role}
      `
    );
  }
}
export default Employer;
