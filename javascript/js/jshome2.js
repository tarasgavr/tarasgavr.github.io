   var arr = new Array(5);
   function fillArray() {
     alert('Fill the array with 5 names');
     for (var i = 0; i < 5; i ++) {
       arr[i] = prompt('enter ' + i ' name');
       }
       return this;
     }
   function checkLogin() {
     fillArray();
     var username = prompt('enter an username');
     var fl = 'Error! The name ' + username + ' does not exist'
     for (i = 0; i < 5; i ++) {
       if (username == arr[i]) {
         fl = arr[i] + ', you entered successful';
           }
       }
       alert(fl);
     }
 checkLogin();
