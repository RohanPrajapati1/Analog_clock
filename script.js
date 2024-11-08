let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

function display(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hdeg = h*30 + m/2;
    let mdeg = m*6;
    let sdeg = 6*s;

    hr.style.transform = `rotate(${hdeg}deg)`;
    min.style.transform = `rotate(${mdeg}deg)`;
    sec.style.transform = `rotate(${sdeg}deg)`;
}

setInterval(display , 1000);