const tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((res) => getApi(res))
  .catch((error) => console.log(error));

function getApi(posts) {
  console.log(posts);
  posts.map((post) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    let Id = document.createElement("td");
    tr.appendChild(Id);
    Id.innerText = post.id;

    let Title = document.createElement("td");
    tr.appendChild(Title);
    Title.innerText = post.title;

    let Body = document.createElement("td");
    tr.appendChild(Body);
    Body.innerText = post.body;
  });
}