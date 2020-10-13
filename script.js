const dateToday = document.querySelector('#date');
let d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

dateToday.textContent = `${days[d.getDay()]}, ${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`;