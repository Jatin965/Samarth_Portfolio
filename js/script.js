// Genertaing The Quote
const QuoteText = document.querySelector('.Quote__TEXT');
const QuoteAuthor = document.querySelector(".Quote__Author");
const NextQuoteBtn = document.querySelector('.Next__Quote__Btn');

const GetRandomQuote = function(){
    let RandomNumber = Math.trunc(Math.random() *1000);

    const request = async function(){
        try {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();
            const Quote = data[RandomNumber];
            QuoteText.textContent = Quote.text;
            
            if(Quote.author === null){
                QuoteAuthor.innerHTML = "By - Robert Henry";
            }else{
                QuoteAuthor.innerHTML = `By - ${Quote.author}`;
            }

        } catch (error) {
            console.error(`Our ERROR 🚶 ${error}`);
        }
    }

    request();
}

GetRandomQuote();


NextQuoteBtn.addEventListener('click',function(){
    GetRandomQuote();
})










// Map Generation
const coords = [24.577278536264505,73.68667602539064]
const MAP_Generator = function(coords) {
    let map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker(coords).addTo(map)
    .openPopup();
}
MAP_Generator(coords);




// Temprature || Time || Date || Month
const Month = document.querySelector('.Month');
const date = document.querySelector('.Day');
const Format = document.querySelector('.Format');
const Time = document.querySelector('.Time');
const Temp = document.querySelector('.temp');
const Now = new Date();
let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Spt','Oct','Nov','Dec'];
Month.textContent = months[Now.getMonth()];
date.textContent = Now.getDate();
const HoursNow = Now.getHours();
let time___format = '';
let HoursNow_New = '';
HoursNow > 12 ? time___format = 'PM' : time___format = 'AM';
Format.textContent =  time___format;
HoursNow > 12 ? HoursNow_New = HoursNow - 12 : HoursNow_New = HoursNow;
Time.textContent = `${HoursNow_New}:${Now.getMinutes()}`;

const getWeatherdata = async function(){
    navigator.geolocation.getCurrentPosition(async function(position){
        const Lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const url = `https://www.7timer.info/bin/astro.php?lon=${lng}&lat=${Lat}&ac=0&unit=metric&output=json&tzshift=0`;
        const data = await fetch(url);
        const response = await data.json();
        Temp.textContent = `${response.dataseries[0].temp2m - 3}°C`;
    });
}
getWeatherdata();









// DARK MODE
const Mode = document.querySelector('.mode__icon');
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav__link');
const body = document.querySelector('body');
const Heading_1 = document.querySelector('.Heading');
const Heading_2 = document.querySelector('.Heading2');
const Heading_3 = document.querySelector('.Heading3');
// const Heading_4 = document.querySelector('.Heading4');
let count = 0;
const Temp_Date_Time_containers = document.querySelectorAll('.Time__Date__Temp div');

const GithubLogo = document.querySelector('.fa-github');
const Envelope = document.querySelector('.fa-envelope');
const MainPage = document.querySelector('.animated__background');


Mode.addEventListener('click',()=>{
    body.classList.toggle('DarkMode');
    nav.classList.toggle('DarkMode');
    MenuList.classList.toggle("DarkMode");
    navLink.forEach(element =>{
        element.classList.toggle('DarkMode__White__color');
    })

    MainPage.classList.toggle('DarkMode');

    Heading_1.classList.toggle('DarkMode_Color');
    Heading_2.classList.toggle('DarkMode_Color');
    Heading_3.classList.toggle('DarkMode_Color');
    // Heading_4.classList.toggle('DarkMode_Color');
    
    count = count+1;
    if(count % 2 === 0){
        Mode.setAttribute("src","./images/icons/light.svg");
    }else{
        Mode.setAttribute("src","./images/icons/dark.svg");
    }

    Temp_Date_Time_containers.forEach(function(el){
        el.classList.toggle('DarkMode__White__color');
        el.style.border = '1px solid grey';
    })

    GithubLogo.classList.toggle('DarkMode__White__color');
    Envelope.classList.toggle('DarkMode__White__color');
})






// New Dark and Light mode

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');
function darker() {
     if ( sessionStorage.getItem('bg') === 'rgb(255, 255, 255)') {

            sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
            sessionStorage.setItem('cc', '#777');


     }
    else if (sessionStorage.getItem('bg') == null || undefined) {
        sessionStorage.setItem('bg', 'rgb(6, 23, 37)');
        sessionStorage.setItem('cc', '#777');

    }
    else if( sessionStorage.getItem('bg') === 'rgb(6, 23, 37)') {

        sessionStorage.setItem('bg', 'rgb(255, 255, 255)');
        sessionStorage.setItem('cc', '#333');


    }

document.body.style.backgroundColor = sessionStorage.getItem('bg');
document.body.style.color = sessionStorage.getItem('cc');

}