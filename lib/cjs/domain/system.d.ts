import Person from './person';
declare class System {
    private listOfPersons;
    constructor();
    addPerson(person: Person): void;
    removePerson(person: Person): void;
    getPersons(): Person[];
}
export { System };
