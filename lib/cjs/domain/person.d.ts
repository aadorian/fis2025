declare class Person {
    private name;
    private age;
    /**
     * Creates a new person
     * @param name
     * @param age
     */
    constructor(name: string, age: number);
    getName(): string;
    getAge(): number;
    setName(name: string): void;
    setAge(age: number): void;
    toString(): string;
}
export default Person;
