const fetch = require("node-fetch")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => json.map((res) => console.log(res.name)))
    .catch((err) => {
        console.log(err)
    })
