import { System } from './system';
import Person from './person';

describe('System', () => {
    let system: System;
    let person1: Person;
    let person2: Person;

    beforeEach(() => {
        system = new System();
        person1 = new Person('John Doe', 30);
        person2 = new Person('Jane Doe', 25);
    });

    test('should add a person to the system', () => {
        system.addPerson(person1);
        expect(system.getPersons()).toContain(person1);
    });

    test('should remove a person from the system', () => {
        system.addPerson(person1);
        system.removePerson(person1);
        expect(system.getPersons()).not.toContain(person1);
    });

    test('should return the list of persons', () => {
        system.addPerson(person1);
        system.addPerson(person2);
        expect(system.getPersons()).toEqual([person1, person2]);
    });

    test('should not remove a person that is not in the system', () => {
        system.addPerson(person1);
        system.removePerson(person2);
        expect(system.getPersons()).toContain(person1);
        expect(system.getPersons()).not.toContain(person2);
    });

  
    test('should throw an error when adding a person that is already in the system', () => {
         system.addPerson(person1);
            expect(() => system.addPerson(person1)).toThrow('Person is already in the list.');
    });

});