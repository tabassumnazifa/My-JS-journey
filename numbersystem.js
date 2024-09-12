var x=543;
var n=3.57812;
console.log(typeof(x));//print type of a variable
x=toString(x);//convert to string 
console.log(typeof(x));
x=parseInt(x);//convert to int 
console.log(typeof(x));
console.log(n.toFixed(2));//fix position after floating point
console.log(n.toPrecision(2));//print the number of digits from a floating point
console.log(typeof(Number("123")));//convert to number