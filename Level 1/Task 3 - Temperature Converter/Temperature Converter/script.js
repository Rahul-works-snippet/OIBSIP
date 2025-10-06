document.getElementById("convertBtn").addEventListener("click", function () {
  const tempInput = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultBox = document.getElementById("result");

  if (tempInput === "" || isNaN(tempInput)) {
    resultBox.innerHTML = "⚠️ Please enter a valid number!";
    resultBox.style.color = "red";
    return;
  }

  const temperature = parseFloat(tempInput);
  let convertedTemp = "";
  let convertedUnit = "";

  switch (unit) {
    case "celsius":
      convertedTemp = `= ${(temperature * 9 / 5 + 32).toFixed(2)} °F<br>
                       = ${(temperature + 273.15).toFixed(2)} K`;
      convertedUnit = "Celsius";
      break;

    case "fahrenheit":
      convertedTemp = `= ${((temperature - 32) * 5 / 9).toFixed(2)} °C<br>
                       = ${(((temperature - 32) * 5 / 9) + 273.15).toFixed(2)} K`;
      convertedUnit = "Fahrenheit";
      break;

    case "kelvin":
      convertedTemp = `= ${(temperature - 273.15).toFixed(2)} °C<br>
                       = ${((temperature - 273.15) * 9 / 5 + 32).toFixed(2)} °F`;
      convertedUnit = "Kelvin";
      break;
  }

  resultBox.style.color = "#023e8a";
  resultBox.innerHTML = `<strong>${temperature} ${convertedUnit}</strong> ${convertedTemp}`;
});
