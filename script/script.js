//user logic
// Akan names are derived from Ghanian culture. Frequently in Ghana, children are given their first name as a 'day name' which corresponds to the day in the week they were born. Here are Ghanian day names.

// Male
// Sunday: Kwasi

// Monday: Kwadwo

// Tuesday: Kwabena

// Wednesday: Kwaku

// Thursday:  Yaw

// Friday: Kofi

// Saturday: Kwame

// Female
// Sunday: Akosua

// Monday: Adwoa

// Tuesday: Abenaa

// Wednesday: Akua

// Thursday:  Yaa

// Friday: Afua

// Saturday: Ama

// Most people do know when their birthdays are, but some might not know what day of the week they were born. Luckily for us, there are ways to calculate the day of the week from a specific date. The following is one of the many methods that exist for that;

// Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

//  where;

//  CC - is the century digits. For example 1989 has CC = 19

//  YY - is the Year digits (1989 has YY = 89)

//  MM -  is the Month

//  DD - is the Day of the month 

//  mod - is the modulus function ( % )

var AkanNames = function(Year, Month, Day, Gender) {
    var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    var maleNames = ['Kwasi', 'Kwadwo','Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    var Day = new Date(Year, --Month, Day);
    if(Gender === 'Male') {
        return Day && maleNames[Day.getDay()];
    }
    else {
        return Day && femaleNames[Day.getDay()];
        }
    }

var dayNames = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', 'Saturday'];


//

var inPutValue = prompt('enter day of the month');

if (dayNames == 1) {
    alert("you were born on " + dayNames[0] + "and your akan Name is " + maleName[0] + "!");
} else if(dayNames == 2) {
    alert("you were born on" + dayNames[1] + "and your akan name is " + maleNames[1] + '!');
}
else if(dayNames == 3) {
    alert("you were born on" + dayNames[2] + "and your akan name is " + maleNames[2] + '!');
}
else if(dayNames == 4) {
    alert("you were born on" + dayNames[3] + "and your akan name is " + maleNames[3] + '!');
}
else if(dayNames == 5) {
    alert("you were born on" + dayNames[4] + "and your akan name is " + maleNames[4] + '!');
}
else if(dayNames == 6) {
    alert(`you were born on${dayNames[5]}and your akan name is ${maleNames[5]}!`);
}
else if(dayNames == 7) {
    alert("you were born on" + dayNames[6] + "and your akan name is " + maleNames[6] + '!');
}