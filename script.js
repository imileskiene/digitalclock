let hours = document.getElementById("hour");
let minutes = document.getElementById("min");
let seconds = document.getElementById("sec");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let dayOfWeek = document.getElementById("weekday");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

setInterval(()=>{
let showTime = new Date();

// console.log(showTime);


// console.log(showTime.getHours());
// console.log(showTime.getMinutes());
// console.log(showTime.getSeconds());


day.innerHTML = showTime.getDate();
month.innerHTML = months[showTime.getMonth()];
year.innerHTML = showTime.getFullYear();
dayOfWeek.innerHTML = daysOfWeek[showTime.getDay()].toUpperCase();

hours.innerHTML = (showTime.getHours()<10?"0":"")+showTime.getHours();
minutes.innerHTML = (showTime.getMinutes()<10?"0":"")+showTime.getMinutes();
seconds.innerHTML = (showTime.getSeconds()<10?"0":"")+showTime.getSeconds();
},1000)

