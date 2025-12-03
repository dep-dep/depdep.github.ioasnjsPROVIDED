/********* create variables *********/

let costPerDay = 35;
let numberOfDaysSelected = 0;
const daysToClear = ["monday","tuesday", "wednesday","thursday","friday"];

/********* colour change days of week *********/
// Grabs the day-selector list
const dayButtons = document.querySelectorAll(".day-selector");

// This action will check dayButtons for all of the list then adds a button feature so I can treat the list as a button instead of an actual element. 
dayButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
        // Grabs the ID of the button pressed in the day-selector then makes it an action resulting in them being treated like separated elements.
        const daySelected = document.getElementById(event.target.id);
        if (!daySelected.classList.contains("clicked")) {
            // adds the required field to change aka the color change and updates the button to be clicked. This would result in one button being active so the client does not get
            // charged twice by just clicking the button more than once.
            daySelected.classList.add("clicked");
            numberOfDaysSelected++;
        } else {
            // if they made a mistake and they want to revoke one of there selection they can do it by pressing the same button again
            daySelected.classList.remove("clicked");
            numberOfDaysSelected--;
        }
        calculateTotalCost();
    });
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearSelection);

function clearSelection() {
    for (const day of daysToClear){
        let daySelected = document.getElementById(day);
        daySelected.classList.remove("clicked");
        numberOfDaysSelected = 0;
        // Resets back to the default. 
        changeRateFullDay();
        calculateTotalCost();
    }
}

/********* change rate *********/
const fullDayButton = document.getElementById("full");
fullDayButton.addEventListener("click", changeRateFullDay);
function changeRateFullDay() {
        fullDayButton.classList.add("clicked");
        halfDayButton.classList.remove("clicked");
        costPerDay = 35;
        calculateTotalCost();
}

const halfDayButton = document.getElementById("half");
halfDayButton.addEventListener("click", changeRateHalfDay);
function changeRateHalfDay() {
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");
    costPerDay = 20;
    calculateTotalCost();
}


/********* calculate *********/
function calculateTotalCost() {
    const calculatedCostElement = document.getElementById("calculated-cost");
    const totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.innerHTML = totalCost;
}

