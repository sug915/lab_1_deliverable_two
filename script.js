var eventtype = prompt("Please enter the event type: casual, semi-formal, or formal? ", "event type");
var tempFahr = prompt("Enter the temperature in Fahrenheit: ", "temperature in Fahrenheit ");

if (eventtype == "casual"){
  var x = "something comfy";
}
else if(eventtype == "semi-formal"){
    var x = "a polo";
  }
else if (eventtype == "formal"){
    var x = "a suit";
  }
else {
  var x = 4;
}

if (tempFahr < 54) {
  var y = "a coat";
}
else if (tempFahr >= 54 && tempFahr <= 70){
    var y = "a jacket";
}
else if (tempFahr > 70){
    var y = "no jacket";
}
  else {
  var y = 4;
}

var result = "Since it is " ;
result += tempFahr;
result += " degrees and you are going to a ";
result += eventtype;
result += " event, you should wear "
result += x;
result += " with "
result += y;

var failure = "There is an error with your responses.  You may have used incorrect spelling.  Please reload the page and try again."

if (x == 4 || y == 4){
  alert(failure);
}
else {
  console.log(result);
  alert(result);
}
