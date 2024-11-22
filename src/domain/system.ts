import Person  from './person';

class System {
    private listOfPersons: Person[];

    constructor() {
        this.listOfPersons = [];
    }


    addPerson(person: Person): void {
        if (this.isPersonInList(person)) {
            throw new Error('Person is already in the list.');
        } else {
            this.listOfPersons.push(person);
        }
        
    }

    removePerson(person: Person): void {
        this.listOfPersons = this.listOfPersons.filter(p => p !== person);
    }

    getPersons(): Person[] {
        return this.listOfPersons;
    }
    private isPersonInList(person: Person): boolean {
        return this.listOfPersons.some(p => p === person);
    }

}

export { System };