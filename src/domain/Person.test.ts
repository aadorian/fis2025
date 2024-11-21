import Person from './person';

describe('Person', () => {
  let person: Person;

  beforeEach(() => {
    person = new Person('John Doe', 30);
  });

  test('should create a person with name and age', () => {
    expect(person.getName()).toBe('John Doe');
    expect(person.getAge()).toBe(30);
  });

  test('should set a new name', () => {
    person.setName('Jane Doe');
    expect(person.getName()).toBe('Jane Doe');
  });

  test('should set a new age', () => {
    person.setAge(25);
    expect(person.getAge()).toBe(25);
  });

  test('should return a string representation of the person', () => {
    expect(person.toString()).toBe('Person  John Doe, age 30]');
  });

  test('should update name and age', () => {
    person.setName('Alice');
    person.setAge(28);
    expect(person.getName()).toBe('Alice');
    expect(person.getAge()).toBe(28);
  });
});
