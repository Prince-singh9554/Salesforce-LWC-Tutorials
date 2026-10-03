// ============================== 3. Parallel API Requests with Promise.all() ==================================

async function getUsers() {

    let [response1, response2, response3] = await Promise.all([

        fetch("https://jsonplaceholder.typicode.com/users/1"),

        fetch("https://jsonplaceholder.typicode.com/users/2"),

        fetch("https://jsonplaceholder.typicode.com/users/3")
    ]);

    console.log("All responses received");

    let data1 = await response1.json();
    let data2 = await response2.json();
    let data3 = await response3.json();

    console.log("User 1:", data1);
    console.log("User 2:", data2);
    console.log("User 3:", data3);
}

getUsers();

/*
FLOW:

                    ┌── fetch(User 1) ──┐
                    │                   │
getUsers() → Promise.all() ─ fetch(User 2) ─→ All complete
                    │                   │
                    └── fetch(User 3) ──┘

All three requests start together.

Promise.all()
        ↓
Waits for ALL requests
        ↓
Returns an array of responses
        ↓
Destructuring
        ↓
response1, response2, response3
*/