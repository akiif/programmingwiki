import fetch from "node-fetch";

const url = "https://programmingwiki.herokuapp.com/";

async function all() {
    return await fetch(url + "articles").then((response) => response.json());
}
async function random() {
    return await fetch(url + "random").then((response) => response.json());
}

async function searchByTitle(title) {
    return await fetch(
        url +
            "articles?" +
            new URLSearchParams({
                q: title,
            })
    ).then((response) => response.json());
}

async function searchByTags(tags) {
    let search = new URLSearchParams(tags.map((s) => ["tags", s]));
    let searchString = search.toString();
    return await fetch(url + "articles?" + searchString).then((response) =>
        response.json()
    );
}

export default all;
export { all, random, searchByTitle, searchByTags };
