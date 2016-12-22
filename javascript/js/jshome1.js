   var x = prompt('enter a number');
   var n = prompt('enter a grade');
   function grade(a, b) {
     var result;
     if (b == 0) {
       result = 1;
     } else {                         //if b == 0
       if (b > 0) {
          result = 1;
         for (var i = 1; i <= b; i++) {
            result = result * a;
         };
       } else {                      //if b > 0
         if (b < 0) {
           result = 1;
           for (var i = -1; i >= b; i--) {
             result = result * a;
           }
           result = 1 / result;
          } else {
           alert('Not supplied!')
         }
       }
     };                             //if b < 0
     return result;
    };
   console.log(grade(x, n));
