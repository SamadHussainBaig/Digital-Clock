let time =  document.querySelector("#time");
let date = document.querySelector("#date");

let currentDate = ()=>{     
const cDate =   new Date();
let hours = cDate.getHours(); // ya number mein hai 0 to 23 ,
//   hours = hours %12   ; for eg hours = 0  % 12  

let minutes =  cDate.getMinutes();
let sec = cDate.getSeconds();
hours = hours %12 ; 
hours = (hours === 0) ? 12 : hours ;
let AmPm = hours >= 12 ? "PM" : "AM" ;

hours = String(hours).padStart(2,"0");
minutes = String(minutes).padStart(2,"0");
sec = String(sec).padStart(2,"0");
// let AmPm = "";
// if(hours >= 12 ){
//     AmPm = "PM"
// }else{
//     AmPm = "AM"
// }

time.textContent=`${hours}:${minutes}:${sec}:${AmPm}`;

let day = cDate.getDay();
let month = cDate.getMonth();
let year = cDate.getFullYear();

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let daysNames = days[day];
let monthsName = months[month] ;
let cu_date = cDate.getDate();
date.textContent = `${daysNames} , ${cu_date} ${monthsName} ${year}`

};


setInterval(currentDate,1000);
