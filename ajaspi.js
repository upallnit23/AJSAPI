async function fetchMarvelData(marvelData) {
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?name=she-hulk&apikey=e161aabd3b7163c95940c4c1f54bfecc");
    const marvelData = await response.json();
    console.log(marvelData);
    return marvelData;
}

document.addEventListener("DOMContentLoaded", async () => {
    const marvelData = await fetchMarvelData("marvelData");
    const marvelInfoElement = document.getElementById("marvelinfo");

    marvelInfoElement.innerHTML = "
    <h2>${marvelData.name}</h2>
    <h3>Description</h3>
    <p>${marvelData.description}</p>"
});
