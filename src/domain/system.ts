
import Person from './person';

class System {
    private listOfPersons: Person[];

    constructor() {
        this.listOfPersons = [];
    }

    /**
     * Adds a person to the list if they are not already in the list.
     * @param {Person} person - The person to add.
     * @throws {Error} If the person is already in the list.
     */
    addPerson(person: Person): void {
        if (this.isPersonInList(person)) {
            throw new Error('Person is already in the list.');
        } else {
            this.listOfPersons.push(person);
        }
    }

    /**
     * Removes a person from the list.
     * @param {Person} person - The person to remove.
     */
    removePerson(person: Person): void {
        this.listOfPersons = this.listOfPersons.filter(p => p !== person);
    }

    /**
     * Checks if a person is already in the list.
     * @param {Person} person - The person to check.
     * @returns {boolean} True if the person is in the list, false otherwise.
     */
    private isPersonInList(person: Person): boolean {
        return this.listOfPersons.some(p => p === person);
    }
    /**
     * Returns the list of persons.
     * @returns {Person[]} The list of persons.
     *  
     *  */
    getPersons(): Person[] {
        return this.listOfPersons;
    }
}
export { System };