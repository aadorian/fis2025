import { Person } from './domain/Person';

document.addEventListener("DOMContentLoaded", () => {
  const updateButton = document.getElementById(
    "updateButton",
  ) as HTMLButtonElement;
  if (updateButton) {
    updateButton.addEventListener("click", updatePerson);
  }
});

function updatePerson() {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const age = (document.getElementById("age") as HTMLInputElement)?.value;
  const root = document.getElementById("root");

  const person = new Person(name, 3);

  if (root) {
    root.innerHTML = `<h1>Updated Person: ${person.getName()}</h1>`;
    if (age) {
      root.innerHTML += `<p>Age: ${person.getAge()}</p>`;
    }
  }
}
