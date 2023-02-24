const tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((res) => getApi(res))
  .catch((error) => console.log(error));

function getApi(todos) {
  console.log(todos);
  todos.map((todo) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    let Id = document.createElement("td");
    tr.appendChild(Id);
    Id.innerText = todo.id;

    let Title = document.createElement("td");
    tr.appendChild(Title);
    Title.innerText = todo.title;

    let Completed = document.createElement("td");
    tr.appendChild(Completed);
    Completed.innerText = todo.completed;
  });
}