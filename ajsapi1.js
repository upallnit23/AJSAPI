/* Exploring Asynchronous JavaScript */
/* Tasks 1 thru 3 */

async function fetchMarvelData(marvelData) {
    const response = await fetch("https://gateway.marvel.com:443/v1/public/characters?name=black%20panther&apikey=e161aabd3b7163c95940c4c1f54bfecc");
    const marvelData = await response.json();
    console.log(marvelData);
    return marvelData;
}