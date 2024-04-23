/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */
let modelName = ""; // Variable to hold the model name
let duration = 0; // Variable to hold the duration

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    let costLabel = document.getElementById("calculated-cost"); // Get the span element for displaying calculated cost
    let totalCost = 0; // Variable to hold the total cost

    // Check the value of modelName and calculate the new total cost accordingly
    switch(modelName) {
        case "XYZ":
            totalCost = duration * 100;
            break;
        case "CPRG":
            totalCost = duration * 213;
            break;
        // Add more cases for other modelName values if needed
        default:
            // Handle default case if modelName doesn't match any known values
            totalCost = 0; // Set totalCost to 0 or handle accordingly
            break;
    }

    // Set the value of the calculated-cost element's innerHTML to the new total cost
    costLabel.innerHTML = totalCost;
}