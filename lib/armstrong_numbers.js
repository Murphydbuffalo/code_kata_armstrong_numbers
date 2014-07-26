/* An Armstrong number is an n-digit number that is equal to the sum of the nth
powers of its digits. */

var armstrongNumber = function(number){
  var stringOfNumber = number.toString();
  var exponent = stringOfNumber.length;
  var sumOfDigits = 0;
  for(var i = 0; i < exponent; ++i){
    sumOfDigits += Math.pow(parseInt(stringOfNumber[i]), exponent);   
  }
  if(sumOfDigits === number){
    console.log('true');
    return true;
  }
  else {
    console.log('false');
    return false;
  }
}

armstrongNumber(5);
armstrongNumber(153);
armstrongNumber(370);

armstrongNumber(25);
armstrongNumber(302);
