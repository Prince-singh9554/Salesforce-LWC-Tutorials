// ============================== 1. Single API Request ==================================

async function getUser() {

    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    let data = await response.json();

    console.log(data);
}

getUser();

/*
FLOW:

getUser()
    ↓
fetch()
    ↓
Server sends response
    ↓
await response
    ↓
response.json()
    ↓
JSON data
    ↓
console.log(data)
*/