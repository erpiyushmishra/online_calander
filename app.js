const date=document.getElementById("date")
const day=document.getElementById("day")
const month=document.getElementById("month")
const year=document.getElementById("year")

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=["January","February","March","April","May","June","July","August","September","October","November","December"]



const today=new Date()
date.innerHTML=today.getDate()
day.innerHTML=days[today.getDay()]
month.innerHTML=months[today.getMonth()]
year.innerHTML=today.getFullYear()