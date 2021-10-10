const inputText = document.querySelector('.input');
var button =document.querySelector('.btn');
const temp = document.querySelector('.temp');
const ct = document.querySelector('.city');
const mm = document.querySelector('.minmax');
const des = document.querySelector('.weather');
const dt = document.querySelector('.date');

const APIkey ="2673c092c1bf318e030c4aa6112e75d6";

const date = new Date();
console.log(date);
// const APIkey ="";
button.addEventListener('click',()=>{

    const cityinp = inputText.value;
    // console.log(cityinp);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityinp}&units=metric&APPID=${APIkey}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        // inputText.value= " ";
        const t=Math.round(data.main.temp);
        temp.innerHTML=`${t}°C`;
        ct.innerHTML=`${data.name}`;
        mm.innerHTML=`${data.main.temp_min}°C / ${data.main.temp_max}°C`;
        des.innerHTML=`${data.weather[0].main}`;
        dt.innerHTML=`${date}`;
        
        console.log(data);

    });
});