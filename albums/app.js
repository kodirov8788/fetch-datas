const tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/albums")
  .then((response) => response.json())
  .then((res) => getApi(res))
  .catch((error) => console.log(error));

function getApi(albums) {
  console.log(albums);
  albums.map((album) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    let Id = document.createElement("td");
    tr.appendChild(Id);
    Id.innerText = album.id;

    let Title = document.createElement("td");
    tr.appendChild(Title);
    Title.innerText = album.title;
  });
}