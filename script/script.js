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

var dayNames = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', 'Saturday'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var maleNames = ['Kwasi', 'Kwadwo','Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];