// ============================== 4. Async Function Returns Promise ==================================

async function calculateMarks() {

    let maths = 85;
    let physics = 78;
    let chemistry = 92;

    let total = maths + physics + chemistry;

    let percentage = total / 3;

    return {
        total: total,
        percentage: percentage.toFixed(2)
    };
}


calculateMarks().then((result) => {

    console.log("Total Marks:", result.total);
    console.log("Percentage:", result.percentage);

});

/*
FLOW:

calculateMarks()
        ↓
async function
        ↓
return object
        ↓
JavaScript automatically creates Promise
        ↓
.then()
        ↓
result
        ↓
Display total and percentage


IMPORTANT:

Even though we wrote:

return object;

an async function behaves like:

return Promise.resolve(object);
*/