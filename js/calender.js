const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const date = d.getDate();
const day = d.getDay();
//
console.log(year)
console.log(month)
console.log(date)
console.log(day)

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayEl = document.getElementById('day')
setInterval(() => {
    dayEl.innerText = weekdays[day]
})
let yearEl = document.getElementById('year')
setInterval(() => {
    yearEl.innerText = year
})
let monthEl = document.getElementById('month')
setInterval(() => {
    monthEl.innerText = month + 1 < 10 ? 0 + (month + 1) : month + 1
})

let dateEl = document.getElementById('date')
setInterval(() => {
    dateEl.innerText = date < 10 ? '0' + date : date;
})