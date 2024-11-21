class Person {
  private name: string;
  private age: number;

  /**
   * Creates a new person
   * @param name
   * @param age
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setName(name: string): void {
    this.name = name;
  }

  setAge(age: number): void {
    this.age = age;
  }

  toString(): string {
    return `Person  ${this.name}, age ${this.age}]`;
  }
}

export default Person;
