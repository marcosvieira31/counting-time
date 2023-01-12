const btFive = document.querySelector('#five');
const btTen = document.querySelector('#ten');
const btThirty = document.querySelector('#thirty');
const btSixty = document.querySelector('#sixty');

const btStart = document.querySelector('#bt-start');
const btRestart = document.querySelector('#bt-restart');
const btClear = document.querySelector('#bt-clear');

const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');

const timeOverView = document.querySelector('#time-out'); 

var countControl = 0;

function addNumber(counter){
    counter /= 1000;
    if(counter < 60){
        seconds.textContent = counter < 10 ? "0"+String(Math.floor(counter)) : String(Math.floor(counter));
        minutes.textContent = "00";
        hours.textContent = "00";
        return counter;
    };
    if(counter >= 60 && counter < 3600){
        seconds.textContent = (counter%60) < 10 ? "0"+String(Math.floor(counter%60)) : String(Math.floor(counter%60));
        minutes.textContent = (Math.floor(counter/60)) < 10 ? "0"+String(Math.floor(counter/60)) : String(Math.floor(counter/60));
        hours.textContent = "00";
        return counter;
    }
    if(counter >= 3600){
        seconds.textContent = (counter%60) < 10 ? "0"+String(Math.floor(counter%60)) : String(Math.floor(counter%60));
        minutes.textContent = (Math.floor((counter/60)%60) < 10 ? "0"+String(Math.floor((counter/60)%60)) : String(Math.floor((counter/60)%60)));
        hours.textContent = (Math.floor(counter/(60*60))) < 10 ? "0"+String(Math.floor(counter/(60*60))) : String(Math.floor(counter/(60*60)))
        return counter;
    }
}

btFive.onclick = () => {
    countControl += 5000;
    addNumber(countControl);
}

btTen.onclick = () => {
    countControl += 10000;
    addNumber(countControl);
}

btThirty.onclick = () => {
    countControl += 30000;
    addNumber(countControl);
}

btSixty.onclick = () => {
    countControl += 60000;
    addNumber(countControl);
}

btStart.onclick = () => {
    
    let countDown = new Date().getTime() + countControl;

    let counting = setInterval(function(){
        var now = new Date().getTime();

        let diference = countDown - now;
        let secondDelay = Math.floor(diference+1000);
        console.log(secondDelay);
        let x = addNumber(secondDelay)
        if(x<1){
            timeOverView.style.display = "flex";
            clearInterval(counting)
        }    
    
    }, 1000);
}

btClear.onclick = () => {
    countControl = 0;
    seconds.textContent = "00";
    minutes.textContent = "00";
    hours.textContent = "00";
}

btRestart.onclick = () => {
    countControl = 0;
    timeOverView.style.display = "none";
}

