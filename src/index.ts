import '../examples/accordion';
import '../examples/carousel';
import '../examples/collapse';
import '../examples/dial';
import '../examples/dismiss';
import '../examples/drawer';
import '../examples/dropdown';
import '../examples/popover';
import '../examples/tabs';
import '../examples/modal';
import '../examples/tooltip';
import '../examples/input-counter';
import '../examples/clipboard';
import '../examples/datepicker';

import Person from '../src/domain/person';


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

  const person = new Person(name,3);

  if (root) {
    root.innerHTML = `<h1>Updated Person: ${person.getName()}</h1>`;
    if (age) {
      root.innerHTML += `<p>Age: ${person.getAge()}</p>`;
    }
  }
}
