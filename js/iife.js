// (function() {
//   alert("This alert was immediately invoked!");
//   }
// )()

// (function(a, b){
//   alert("The sum of" + a.toString() + " and " + b.toString() + " is: " + (a+b).toString());
//   }
// )(40, 50)

// var d = (function(a, b){
//   var c = 0;
//   c = a - b;
//   return c
//   }
// )(40, 5);

// alert("The difference is:" + d);


alert("The difference between the two is:" + (function(a, b){
  var c = 0;
  c = a - b;
  return c
  }
)(40, 5));
