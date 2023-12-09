// P1 if else
// type = "text/javascript">;
// var age = 15;
// if( age > 18 )//Conditional Statement
// {
// document.write("<b>Eligible for voting</b>");
// }
// else
// {
// document.write("<b>Not Eligible for voting</b>");
// }

// P2 Greeting of the day
// const hour = new Date().getHours();
// let greeting;
// if (hour < 18) {
// greeting = "Good day";
// } else {
// greeting = "Good evening";
// }
// document.getElementById("demo").innerHTML = greeting;
// P3 Random Links
// let text;
// if (Math.random() < 0.5) {
// text = "<a href='linkedin.com'>LinkedIn</a>";
// } else {
//     text = "<a href='indeed.com'>Indeed</a>";
//     }
//     document.getElementById("demo").innerHTML = text;
// P4 switch case
let day;
switch (new Date().getDay()) {
case 0:
day = "Sunday";
break;
case 1:
day = "Monday";
break;
case 2:
day = "Tuesday";
break;
case 3:
day = "Wednesday";
break;
case 4:
day = "Thursday";
break;
case 5:
day = "Friday";
break;
case 6:
day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;