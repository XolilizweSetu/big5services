//calculating the sum
function calcTotal() {
    // Get the values of each dropdown list in html
    let valueBike = parseInt(document.getElementById("bike").value);
    let valueSedan = parseInt(document.getElementById("sedan").value);
    let valueSuv = parseInt(document.getElementById("suv").value);
    let valueBus = parseInt(document.getElementById("minibus").value);


    // Calculate the sum
    let totalSum = (valueBike * 80) + (valueSedan * 100) + (valueSuv * 180) + (valueBus * 220);

    // Display the result
    document.getElementById("totalCalc").innerText = totalSum;
}