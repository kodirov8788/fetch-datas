const tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((res) => getApi(res))
  .catch((error) => console.log(error));

function getApi(comments) {
  console.log(comments);
  comments.map((comment) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    let Id = document.createElement("td");
    tr.appendChild(Id);
    Id.innerText = comment.id;

    let Name = document.createElement("td");
    tr.appendChild(Name);
    Name.innerText = comment.name;

    let Email = document.createElement("td");
    tr.appendChild(Email);
    Email.innerText = comment.email;

    let Body = document.createElement("td");
    tr.appendChild(Body);
    Body.innerText = comment.body;
  });
}