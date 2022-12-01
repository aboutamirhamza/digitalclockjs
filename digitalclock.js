// Digital Clock code start Here

let second = document.querySelector(".second");
let minute = document.querySelector(".minute");
let hour = document.querySelector(".hour");
let ampm = document.querySelector(".ampm");

let runTime = ()=>{
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    
    if (hr >= 12) {
        ampm.innerHTML = "PM";
    }else{
        ampm.innerHTML = "AM";
    }
    
    if (hr > 12) {
        hr = hr - 12;
    }
    
    if (hr < 10) {
        hr = "0" + hr;
    }else{
        hr;
    }
    
    if (min < 10) {
        min = "0" + min;
    }else{
        min;
    }
    
    if (sec < 10) {
        sec = "0" + sec;
    }else{
        sec;
    }
    hour.innerHTML = hr;
    minute.innerHTML = min;
    second.innerHTML = sec;
}

setInterval(() => {
    runTime();
}, 10);
// Digital Clock code end Here