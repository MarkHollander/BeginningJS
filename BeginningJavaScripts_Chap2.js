$("#test").bind("click", function () {
  var firstNum = parseInt(prompt("Enter the first number",""));
  var secondNum = parseInt(prompt("Enter the second number",""));
  var theTotal=firstNum + secondNum;
document.write(firstNum+ " added to " +secondNum + " equals " + theTotal);
});