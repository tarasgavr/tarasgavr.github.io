   var arr = new Array(5);
   var username;
   var fl;
   function fillArray() {
     var i;
     for (i = 0; i<5; i++)
     {
       arr[i] = prompt('enter a name');
     }
     username = prompt('enter an username');
     for (i = 0; i<5; i++)
     {
       if (arr[i] == username)
       {
         fl = true;
       }
       else
       {
         fl = false;
       }
     }
     if (fl) {
       alert(username + ', you entered successful');
     } else {
       alert('Error! The name ' + username + ' does not exist');
     }
     return this;
   }
fillArray();
