//Question 1
// document.write(new Date (), "<br>")


//Question 2
// let monthinayear = ["January","February","March","April","May","June","July",
// "August","September","October","November","December"];
// let m = new Date ()
// let month = d.getMonth()
// alert(`Current Month : ${monthinayear[month]}`)

//Question 3
// let totalday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// let d = new Date ()
// let day = d.getDay()
// alert(totalday[day])

//Question 4
// let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let checkingday = d.getDay()
// if(checkingday==day[0] || checkingday==day[6]){
//     alert("It's Fun day")
// }else{
//     alert("It's Work day")
// }


//Question 5
// const currentDate = new Date();
// if (currentDate.getDate() < 16) {
    //   console.log("First fifteen days of the month");
// } else {
//   const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
//   console.log(`Last day of the month: ${lastDayOfMonth.toDateString()}`);
// }


//Question 6
// const currentDate = new Date();
// const minutesSinceEpoch = Math.floor(currentDate.getTime() / 60000);
// console.log(`Minutes since midnight on Jan 1, 1970: ${minutesSinceEpoch}`);

//Question 7
// const getcurrentDate = new Date();
// const currentHour = getcurrentDate.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


//Question 8
// let lastDayOfLastMonth2020 = new Date(2020, 11, 31);
// console.log("laterDate:", lastDayOfLastMonth2020);

//Question 9
// let ramadanday = new Date("23 march, 2023")
// let currentday = new Date()
// let minus =  currentday - ramadanday
// let formula = Math.floor(minus / (1000 * 60  *60  * 24 ))
// alert(`${formula} days have passed since !st Ramadan 2023`)


//Question 10
// let from2015 = new Date("1 jan, 2015")
// let currentDate = new Date()
// let secondsElapsed =  currentDate - from2015
// document.write(`Seconds elapsed between the reference date and the beginning of 2015: ${secondsElapsed} seconds`);




//Question 11
// const currentDate = new Date();
// const currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write(`Modified Date: ${currentDate}`);

//Question 12
// const currentDate = new Date();
// const currentYear = currentDate.getFullYear();
// currentDate.setFullYear(currentYear - 100);
// document.write(`Modified Date: ${currentDate}`);


//Question 13
// const userAge = prompt("Please enter your age:");
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - userAge;
// document.write(`Your birth year is: ${birthYear}`);


//Question 14
let customername = "Abdur-Rehman"
let monthinayear = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let getmonth = new Date()
let month = getmonth.getMonth()
// alert(monthinayear[month])
let numofunits = 224
let chargesofunits = 44
let netAmountpayAble = 5440
let lateAmountpayAble = 420
let grossAmountpayAble = 5860
document.write("K-Electric Bill <br><br>")
document.write(`Customer Name : ${customername} <br>`)
document.write(`Month : ${monthinayear[month]} <br>`)
document.write(`Number of units : ${numofunits} <br>`)
document.write(`Charges Per units : ${chargesofunits} <br><br>`)
document.write(`Net Amount Payable (within Due Date) : ${netAmountpayAble} <br>`)
document.write(`Late Payment Surcharge : ${lateAmountpayAble}<br>`)
document.write(`Gross Amount Payable (after Due Date) : ${grossAmountpayAble}<br>`)