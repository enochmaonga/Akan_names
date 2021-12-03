//user logic or front end
 var day = document.getElementById("day").value;
 var day = parseInt(day);
 var month = document.getElementById("month").value;
 var month = parseInt(month);
 var year = document.getElementById("year").value;
 var year = parseInt(year);

 
// Business (or back-end) logic:
     (Year, Month, Day, Gender) => {
         var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
         var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
         var dayNames = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', 'Saturday'];
         var Day = new Date(Year, --Month, Day);
         if (Gender === 'Male') {
             return Day && maleNames[Day.getDay()];
         }
         else {
             return Day && femaleNames[Day.getDay()];
         }
     }



//  }
// var inPutValue = prompt('enter day of the month');

// if (dayNames == 1) {
//     alert("you were born on " + dayNames[0] + "and your akan Name is " + maleName[0] + "!");
// } else if(dayNames == 2) {
//     alert("you were born on" + dayNames[1] + "and your akan name is " + maleNames[1] + '!');
// }
// else if(dayNames == 3) {
//     alert("you were born on" + dayNames[2] + "and your akan name is " + maleNames[2] + '!');
// }
// else if(dayNames == 4) {
//     alert("you were born on" + dayNames[3] + "and your akan name is " + maleNames[3] + '!');
// }
// else if(dayNames == 5) {
//     alert("you were born on" + dayNames[4] + "and your akan name is " + maleNames[4] + '!');
// }
// else if(dayNames == 6) {
//     alert(`you were born on${dayNames[5]}and your akan name is ${maleNames[5]}!`);
// }
// else if(dayNames == 7) {
//     alert("you were born on" + dayNames[6] + "and your akan name is " + maleNames[6] + '!');
// }