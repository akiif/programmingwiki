# programmingwiki

> Get programming articles

## Install

```sh
npm install programmingwiki
```

## Usage

Note: You can only use this package with es6 import. [How to use es6 import in nodejs](https://www.geeksforgeeks.org/how-to-use-an-es6-import-in-node-js/)

```js
// es6
import * as programmingwiki from ("programmingwiki")


await programmingwiki.all();
//=>[{"_id":"635ff60b3ef4cbf59de412ba","title":"CSS","content":"Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.","tags":["Language","Web-Development","Frontend"],"__v":0}...]

await programmingwiki.random();
//=> [{"_id":"6360eeebbbd604d6985864e5","title":"REST","content":"REST is short for REpresentational State Transfer. It's an architectural style for designing APIs.","tags":["API"],"__v":0}]

await programmingwiki.searchByTitle("REST");
//=> [{"_id":"6360eeebbbd604d6985864e5","title":"REST","content":"REST is short for REpresentational State Transfer. It's an architectural style for designing APIs.","tags":["API"],"__v":0}]

await programmingwiki.searchByTag(["Web-Development", "API"]);
```
## API

### .all()

Type: `Function`

Retrieves all the stored programming articles.

### .random()

Type: `Function`

Random programming article.

### .searchByTitle(title)

Type: `Function`

Retrieve a programming article by the title name.

### .searchByTag(tags[])

Type: `Function`

Retrieves programming articles by their tags.

Some of the tags available are:

-   Web-Development
-   Languages
-   API
-   Framework
-   Database
-   Frontend
-   JavaScript-Library
-   Backend
-   Network
-   Software-Development


## Related

- API Endpoint: https://programmingwiki.herokuapp.com/  
- [ProgrammingWiki-API](https://github.com/akiif/ProgrammingWiki-API) : how to use the api directly.
- [npm](https://www.npmjs.com/package/programmingwiki)