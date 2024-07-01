
const date = new Date()

const daysOfAWeek = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"]

const day = date.getDay()
const currentDate = date.getUTCDate()
const currentMonth = date.getUTCMonth() + 1
const currentYear = date.getUTCFullYear()

const dateString = currentDate + "/ " + currentMonth + "/ " + currentYear 

const currentHour = date.getUTCHours()
const currentMinutes = date.getUTCMinutes()

const timeString = currentHour + " : " + currentMinutes

window.onload = function(){
    document.getElementById("currentDay").textContent = daysOfAWeek[day] + ","
    document.getElementById("currentDate").textContent = dateString + ", "
    document.getElementById("currentTimeUTC").textContent = timeString 
}
