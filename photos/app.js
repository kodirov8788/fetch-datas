const body = document.querySelector("body");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((json) => getApi(json))
  .catch((error) => {
    console.log("Xato: ", error);
  });
function getApi(photos) {
  // console.log(users);
  photos.map((photo) => {
    let img = document.createElement("img");
    img.src = photo.thumbnailUrl;
    body.appendChild(img);
  });
}
