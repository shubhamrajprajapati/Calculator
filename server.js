const express = require("express");
const path = require("path");
// const email = require("openurl");
// const {phone} = require('phone');

const app = express();
const port = process.env.PORT || 3000;

// Setting path for public directory
const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));

// Validation
const validate = (num1, num2, operator) => {
	let total;

  if (num1 === "" || num1 === null) {
      total = "Can't calculate. First input can not be empty or a character.";
  } else if (num2 === "" || num2 === null){
      total = "Can't calculate. Second input can not be empty or a character..";
  } else { // After empty validation assigned to proper integer
     
		num1 = Number(num1);
		num2 = Number(num2);

		// Checking if number or mixed character
    if (Number.isInteger(num1)) {
      if (Number.isInteger(num2)) {
        total = calculate(num1, num2, operator);
      } else {
        total = "Please enter number as your second input.";
      }
    } else {
      total = "Please enter number as your first input.";
    }
  }

	return total;
};

// Function for calculating
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "add":
      total = `The final result for ${num1} + ${num2} = ` + (num1 + num2);
      break;

    case "subtract":
      total = `The final result for ${num1} - ${num2} = ` + (num1 - num2);
      break;

    case "multiply":
      total = `The final result for ${num1} * ${num2} = ` + num1 * num2;
      break;

    case "divide":
      total = `The final result for ${num1} / ${num2} = ` + num1 / num2;
      break;

    default:
      total = "Some error occured. Please refresh the page and try again.";
      break;
  }

  return total;
};

// Handling Calculate request for form post data with page reload
app.post("/calculate-form-data", (req, res) => {
  const num1 = req.body.number1;
  const num2 = req.body.number2;
  const operator = req.body.operator1;

  res.json(
    {"finalResponse": validate(num1, num2, operator)}
  );

});

// Handling Calculate request for with ajax post data call
app.post("/calculate-ajax", (req, res) => {
	const num1 = req.body.num1;
	const num2 = req.body.num2;
	const operator = req.body.operator2;
  
	res.json(
    {"finalResponse": validate(num1, num2, operator)}
  );
  
  });

// For mailing me
app.get("/email-me", (req, res) => {
	// email.mailto(["shubham@jollylifestyle.com"], { subject: "Hello Shubham!", body: "I am emailing you after seeing your calculator project.\nMy review on your project:\n" });
	res.redirect("mailto:shubham@jollylifestyle.com?subject=Hello Shubham!&body=I am emailing you after seeing your calculator project.\nMy review on your project:\n");
})

// For calling me
app.get("/call-me", (req, res) => {
	// phone('(91) 8789443475', {country: 'IN'});
	res.redirect("tel:+918789443475");
})

// Server Setup
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
