import './accordion';
import './carousel';
import './collapse';
import './dial';
import './dismiss';
import './drawer';
import './dropdown';
import './popover';
import './tabs';
import './modal';
import './tooltip';
import './input-counter';
import './clipboard';
import './datepicker';

import { System } from './domain/system';

import Person from './domain/person';

const system = new System();

system.addPerson(new Person('John Doe', 30));


document.addEventListener('DOMContentLoaded', () => {
  const updateButton = document.getElementById(
    'updateButton',
  ) as HTMLButtonElement;

  
  if (updateButton) {
    updateButton.addEventListener('click', updatePerson);
   
  }
});




function updatePerson() {
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const age = (document.getElementById('age') as HTMLInputElement)?.value;
  const root = document.getElementById('root');

  
  if (root) {
    const ageNumber = parseInt(age);
    if (isNaN(ageNumber) || ageNumber <= 0) {
        root.innerHTML = `<div class="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Info alert!</span> Age must be >0.
  </div>
</div>`;
system.getPersons().forEach((p: Person) => {
    root.innerHTML += `<p> ${p.getName()}</p>`;
}
);
    } else {
        const person = new Person(name, ageNumber);
        root.innerHTML = `<h1>Updated Person: ${person.getName()}</h1>`;
        root.innerHTML += `<p>Age: ${person.getAge()}</p>`;
        system.addPerson(person);
       
    }
}   



}