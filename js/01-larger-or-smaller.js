var x = prompt("Enter the first Number", "0");
var y = prompt("Enter the second Number", "0");
var num1 = parseInt(x);
var num2 = parseInt(y);
if(num1 > num2)
    document.write(num1);
else if(num2 > num1)
    document.write(num2);
else 
    document.write(num1 +" and "+ num2 +" both are equal.");