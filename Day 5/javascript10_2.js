// ============================== 2. Sequential Promises with 2 Seconds Delay ==================================

function getUser(userId) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(`User ${userId} data received`);

        }, 2000);

    });
}


async function getUsers() {

    console.log("Starting User 1...");

    let user1 = await getUser(1);

    console.log(user1);


    console.log("Starting User 2...");

    let user2 = await getUser(2);

    console.log(user2);


    console.log("Starting User 3...");

    let user3 = await getUser(3);

    console.log(user3);


    console.log("All users received!");
}

getUsers();

/*
FLOW:

getUser(1)
    ↓
wait 2 seconds
    ↓
User 1 received
    ↓
getUser(2)
    ↓
wait 2 seconds
    ↓
User 2 received
    ↓
getUser(3)
    ↓
wait 2 seconds
    ↓
User 3 received
    ↓
All users received


Total time:

User 1 → 2 seconds
User 2 → 2 seconds
User 3 → 2 seconds

Total ≈ 6 seconds
*/