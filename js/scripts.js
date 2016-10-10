var add = function(number1, number2) {
  return number1 + number2;
};

// subtraction
var subtraction = function(number1, number2) {
  return number1 - number2;
};

// multiplication
var multiplication = function(number1, number2) {
  return number1 * number2;
};

// division
var division = function(number1, number2) {
  return number1 / number2;
};

// exponent
var exponent = function(number1, number2) {
  return Math.pow(number1, number2);
}

//Front-end logic
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
  event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtraction(number1, number2);
    } else if (operator === "multiply") {
      result = multiplication(number1, number2);
    } else if (operator === "divide") {
      result = division(number1, number2);
    } else if (operator === "exponent") {
      result = exponent(number1, number2);
    }
    $("#output").text(result);
  });
});
