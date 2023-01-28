<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            width: 500px;
            margin: auto;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>
            Get with page refresh
        </h1>

        <form action="/calculate-form-data" method="post">
            <input type="text" name="number1" id="number1" placeholder="First Number">

        <!-- <label for="cars">Choose Operator</label> -->

        <select name="operator1" id="operator1">
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>

        <input type="text" name="number2" id="number2" placeholder="Second Number">

        <button type="submit" id="submit">Calculate (With Page Reload)</button>
        </form>
    </div>

    <div class="container">
        <h1>
            Ajax Request without Reloading Page
        </h1>

        <input type="text" name="num1" id="num1" placeholder="First Number">

        <!-- <label for="cars">Choose Operator</label> -->

        <select name="operator2" id="operator2">
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>

        <input type="text" name="num2" id="num2" placeholder="Second Number">

        <button type="button" id="submit" onclick="calculate();">Calculate</button>

        <div class="m-4 p-5" id="result"></div>
    </div>

    <script>
        
    </script>


    <script src="js/script.js"></script>
</body>

</html>