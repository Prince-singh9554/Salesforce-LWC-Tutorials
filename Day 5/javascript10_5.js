// ============================== 5. Dashboard Data using Promise.all() ==================================

function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 101,
                name: "Prince",
                role: "Developer"
            });

        }, 1500);

    });
}


function getNotifications() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "New message received",
                "Profile updated",
                "New assignment available"
            ]);

        }, 1000);

    });
}


function getProducts() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "Laptop",
                "Keyboard",
                "Mouse"
            ]);

        }, 2000);

    });
}


async function loadDashboard() {

    console.log("Loading dashboard...");


    let [user, notifications, products] = await Promise.all([

        getUser(),

        getNotifications(),

        getProducts()

    ]);


    console.log("Dashboard Loaded!");

    console.log("User:", user);

    console.log("Notifications:", notifications);

    console.log("Products:", products);
}


loadDashboard();

/*
FLOW:

                 loadDashboard()
                       ↓
                 Promise.all()
                       ↓
          ┌────────────┼────────────┐
          ↓            ↓            ↓
      getUser()   getNotifications() getProducts()
          ↓            ↓            ↓
       1.5 sec       1 sec          2 sec
          └────────────┼────────────┘
                       ↓
                 All completed
                       ↓
             ┌─────────┼─────────┐
             ↓         ↓         ↓
           user  notifications  products
                       ↓
                Dashboard Loaded


Total time ≈ 2 seconds

Why?

Because the three operations run together.

The longest operation takes 2 seconds,
so Promise.all() completes in approximately 2 seconds.
*/