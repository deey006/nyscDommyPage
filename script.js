const dateToday = document.querySelector('#date');
let d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","Febuary","March","April","May","June","July", "August", "September", "October", "November", "December"];

dateToday.textContent = `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDay()}, ${d.getFullYear()}`;