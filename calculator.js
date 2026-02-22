function calculateGold() {
    let rate = document.getElementById("goldRate").value;
    let grams = document.getElementById("grams").value;
    let total = rate * grams;
    document.getElementById("goldResult").innerText =
        "Total Value: ₹ " + total;
}

function calculateEMI() {
    let P = document.getElementById("loanAmount").value;
    let annualRate = document.getElementById("interestRate").value;
    let N = document.getElementById("loanTenure").value;
    let R = annualRate / 12 / 100;

    let EMI = (P * R * Math.pow((1 + R), N)) /
              (Math.pow((1 + R), N) - 1);

    document.getElementById("emiResult").innerText =
        "Monthly EMI: ₹ " + EMI.toFixed(2);
}

function calculateSIP() {
    let P = document.getElementById("sipAmount").value;
    let annualRate = document.getElementById("sipRate").value;
    let years = document.getElementById("sipYears").value;

    let monthlyRate = annualRate / 12 / 100;
    let months = years * 12;

    let futureValue = P *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);

    document.getElementById("sipResult").innerText =
        "Maturity Amount: ₹ " + futureValue.toFixed(2);
}