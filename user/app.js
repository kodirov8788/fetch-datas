const tbody = document.querySelector("tbody");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((res) => getApi(res))
  .catch((error) => console.log(error));

function getApi(users) {
  console.log(users);
  users.map((user) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);

    let Id = document.createElement("td");
    tr.appendChild(Id);
    Id.innerText = user.id;

    let Name = document.createElement("td");
    tr.appendChild(Name);
    Name.innerText = user.name;

    let Username = document.createElement("td");
    tr.appendChild(Username);
    Username.innerText = user.username;

    let Email = document.createElement("td");
    tr.appendChild(Email);
    Email.innerText = user.email;

    let Website = document.createElement("td");
    tr.appendChild(Website);
    Website.innerText = user.website;

    let Phone = document.createElement("td");
    tr.appendChild(Phone);
    Phone.innerText = user.phone;

    let Adress = document.createElement("td");
    tr.appendChild(Adress);
    Adress.innerText = user.address.city;

    let Company =document.createElement("td")
    tr.appendChild(Company)
    Company.innerText=user.company.name
  });
}