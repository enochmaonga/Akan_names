//user logic or front end
function submition() { 
 var day = document.getElementById("day").value;
 var dd = parseInt(dd);
 var month = document.getElementById("month").value;
 var mm = parseInt(mm);
 var year = document.getElementById("year").value;
 var yy = parseInt(year.toString().slice(2,4));
 var cc = Math.ceil(year / 100)
 // this is the formula we are given

 var result = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
 
 var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
 var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
//  var dayNames = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', 'Saturday'];
if (document.getElementById("gender").checked) {
    var gender = "male";
}
    else {
        var gender = "female";
        if(dd <= 0 || dd > 31) {
            alert("invalid date");
        }
        else if(mm <= 0 || mm > 12) { 
            alert("invalid month");
        }
        else if(mm == 2 && dd > 29) {
            alert("invalid day of month");
        }
        else if (Math.round(result) == 0 && gender === 'male') {
            document.getElementById("final").innerHTML = ("You were born on Sunday, your Akan Name is " + maleNames[0]);
          }
          else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'male') {
            document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + maleNames[1]);
          }
          else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'male') {
            document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + maleNames[2]);
          }
          else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'male') {
            document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[3]);
          }
          else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'male') {
            document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[4]);
          }

            else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'male') {
                document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[5]);
              }
              else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'male') {
                document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + maleNames[6]);
              }
              else if (Math.round(result) == 0 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Sunday, your Akan Name is " + femaleNames[0]);
              }
              else if (Math.round(result) == 1 || Math.round(result) == -1 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Monday, your Akan Name is " + femaleNames[1]);
              }
              else if (Math.round(result) == 2 || Math.round(result) == -2 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Tuesday, your Akan Name is " + femaleNames[2]);
              }
              else if (Math.round(result) == 3 || Math.round(result) == -3 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Wednesday, your Akan Name is " + femaleNames[3]);
              }
              else if (Math.round(result) == 4 || Math.round(result) == -4 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Thursday, your Akan Name is " + femaleNames[4]);
              }
              else if (Math.round(result) == 5 || Math.round(result) == -5 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Friday, your Akan Name is " + femaleNames[5]);
              }
              else if (Math.round(result) == 6 || Math.round(result) == -6 && gender === 'female') {
                document.getElementById("final").innerHTML = ("You were born on Saturday your Akan Name is " + femaleNames[6]);
              }
              else {
                  alert("You need to enter all details");
              }
            }
// Business (or back-end) logic:
//      (Year, Month, Day, Gender) => {
         
         
         
//          var Day = new Date(Year, --Month, Day);
//          if (Gender === 'Male') {
//              return Day && maleNames[Day.getDay()];
//          }
//          else {
//              return Day && femaleNames[Day.getDay()];
//          }
//      }



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
// }