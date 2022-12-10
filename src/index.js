import axios from 'axios';

const url = "https://programmingwiki.up.railway.app/";

async function all() {
  return await
  axios.get(url + "articles")
    .then((response) => response.data)
    .catch((error) => ({
      "error": "Unable to fetch the query"
    }));
}

async function random() {
  return await
  axios.get(url + "random")
    .then((response) => response.data)
    .catch((error) => ({
      "error": "Unable to fetch the query"
    }));
}

async function searchByTitle(title) {
  return await
  axios.get(
      url +
      "articles?" +
      new URLSearchParams({
        q: title,
      })
    )
    .then((response) => response.data)
    .catch((error) => ({
      "error": "Unable to fetch the query"
    }));
}

async function searchByTags(tags) {
  let search = new URLSearchParams(tags.map((s) => ["tags", s]));
  let searchString = search.toString();
  return await
  axios.get(url + "articles?" + searchString)
    .then((response) => response.data)
    .catch((error) => ({
      "error": "Unable to fetch the query"
    }));
}

export default all;
export {
  all,
  random,
  searchByTitle,
  searchByTags
};