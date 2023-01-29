// Hide result box for first loading
document.getElementById("result").hidden = true;

// Function for calculate
function calculate() {
  document.getElementById("result").hidden = false;
  document.getElementById("resultAnswer").innerText = "calculating...";
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operator2 = document.getElementById("operator2").value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let resultJson  = this.responseText;
      resultJson = JSON.parse(resultJson);
      document.getElementById("resultAnswer").innerHTML = resultJson.finalResponse;
      // console.log(this.responseText);
    }
  };

  xhttp.open("POST", "/calculate-ajax", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`num1=${num1}&operator2=${operator2}&num2=${num2}`);
}
