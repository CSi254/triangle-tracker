var triangleTracker = function(){
var A =parseFloat(prompt('Enter side A'));
var B=parseFloat(prompt('Enter side B'));
var C =parseFloat(prompt('Enter side C'));

if(isNaN(A) === true || isNaN(B) === true || isNaN(C) === true){
alert("Plese enter a Number");
}
else if (A === B && B === C) {
   alert("Equalateral");
   }
   else  if (A === B || B === C || A === C) {
      alert("Isosceles");
      }
      else  if ( typeof A !=="number" || typeof B !=="number" ||typeof C !=="number" ) {
         alert("Please enter a number");
         }
