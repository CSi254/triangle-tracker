var triangleTracker = function(){
var array=[];

array.push(parseFloat(prompt('Enter side A')));
array.push(parseFloat(prompt('Enter side B')));
array.push(parseFloat(prompt('Enter side C')));

if(isNaN(array[0]) === true || isNaN(array[1]) === true || isNaN(array[2]) === true){
alert("Plese enter a Number");
}
else if (array[0] === array[1] && array[1] === array[2]) {
   alert("Equalateral");
   }
   else  if (array[0] === array[1] || array[1] === array[2] || array[0] === array[2]) {
      alert("Isosceles");
      }
      else  if ( typeof array[0] !=="number" || typeof array[1] !=="number" ||typeof array[2] !=="number" ) {
         alert("Please enter a number");
         }
         else {
          alert("Scalene!");
          }
        }
