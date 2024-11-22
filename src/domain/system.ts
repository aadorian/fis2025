import Person  from './person';

class System {
    private listOfPersons: Person[];

    constructor() {
        this.listOfPersons = [];
    }

    addPerson(person: Person): void {
        this.listOfPersons.push(person);
    }

    removePerson(person: Person): void {
        this.listOfPersons = this.listOfPersons.filter(p => p !== person);
    }

    getPersons(): Person[] {
        return this.listOfPersons;
    }
}

export { System };