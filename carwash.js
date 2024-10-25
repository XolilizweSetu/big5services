function calcTotal() {
    // Get the values of each dropdown list
    let valueBike = parseInt(document.getElementById("bike").value);
    let valueSedan = parseInt(document.getElementById("sedan").value);
    let valueSuv = parseInt(document.getElementById("suv").value);
    let valueBus = parseInt(document.getElementById("minibus").value);

    // Calculate the sum
    let totalSum = (valueBike * 80) + (valueSedan * 100) + (valueSuv * 180) + (valueBus * 220);

    // Display the result on the page
    document.getElementById("totalCalc").innerText = totalSum;

    // Update the PayFast amount input
    document.getElementById("payfast-amount").value = totalSum.toFixed(2); // Converts to string with two decimal places
}

function storeTotal() {
    // Get the total from the displayed total value
    let totalAmount = document.getElementById("totalCalc").innerText;
    // Store it in sessionStorage
    sessionStorage.setItem("totalAmount", totalAmount);
}
