// Dates in javascript

let myDate = new Date();
// this looks very unorganised
// console.log(myDate);

// we give a function to string to the date and convert it into string 
// console.log(myDate.toString());

// to date string function gives only date it removes time from the previous string 
// console.log(myDate.toDateString());

// to isos string function return date string in iso format 
// console.log(myDate.toISOString());

// to json function 
// console.log(myDate.toJSON());

//to locale function 
// console.log(myDate.toLocaleString());

// date is an object type datatype
// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 6, 26);
// console.log(myCreatedDate.toDateString());

let todayDate = new Date(2024, 6, 26, 5, 3);
// console.log(todayDate.toLocaleString());

let yesterdayDate = new Date("07-25-2024");
// console.log(yesterdayDate.toLocaleString());

let myTimeStamp = Date.now();
// this give the millisecond from 1 jan 1970 according to standards
// console.log(myTimeStamp);

// we can also convert date into this millisecond by getTime function 
// console.log(myCreatedDate.getTime());

// this gives todays date in millisecond 
// console.log(Date.now());

// if you want the above data in seconds then simply divide it by 1000 but it gives a decimal value 
// console.log(Date.now() / 1000);

// we dont want decimal values in the second so we wrap it up in math.floor or math.round
// console.log(Math.floor(Date.now() / 1000));




let newDate = new Date();
// console.log(newDate);

// if you want to know the month of a given date then use getmonth function
// console.log(newDate.getMonth());

// if you want to know the day of a given date then use getday function
// starts from monday (monday = 1)
// console.log(newDate.getDay());

// we use this because user should not get confused that months start from zero 
// console.log(newDate.getMonth() + 1);

// `${newdate.getDay()} and the time `

// you can customize date and time using tolocalestring function 
newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: "";
})