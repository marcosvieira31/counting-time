const btFive = document.getElementById('five');
const btTen = document.getElementById('ten');
const btThirty = document.getElementById('thirty');
const btSixty = document.getElementById('sixty');

const btStart = document.getElementById('bt-start');
const btClear = document.getElementById('bt-clear');

const Seconds = document.getElementById('seconds');
const Minutes = document.getElementById('minutes');
const Hours = document.getElementById('hours');

let numberControl = 0;

btFive.onclick = () => {
    numberControl += 5;
    addTime(numberControl);
}
btTen.onclick = () => {
    numberControl += 10;
    addTime(numberControl);
}
btThirty.onclick = () => {
    numberControl += 30;
    addTime(numberControl);
}
btSixty.onclick = () => {
    numberControl += 60;
    addTime(numberControl);
}

btStart.onclick = () => {
    this.timeOut = setTimeout(() => {alert("O tempo acabou!")}, numberControl*1000)}

btClear.onclick = () => {
    numberControl = 0;
    Seconds.textContent = "00";
    Minutes.textContent = "00";
    Hours.textContent = "00";
    clearTimeout(this.timeOut);
}

function addTime(num){
        
    if(num<60){
        Seconds.textContent = addZero(num);
    }
    if(num >= 60 && num < 3600) {
        let minCount = Math.trunc(num/60);
        let secCount = Math.round(((num/60)-minCount)*60);
        
        Minutes.textContent = addZero(minCount);
        Seconds.textContent = addZero(secCount);        
    }
    if(num>=3600){
        let hourCount = Math.trunc(num/3600);
        let minTrunc = (num/60)-(hourCount*60);
        let minCount = Math.trunc(minTrunc);
        let secCount = Math.round(((minTrunc)-minCount)*60);

        Hours.textContent = addZero(hourCount);
        Minutes.textContent = addZero(minCount);
        Seconds.textContent = addZero(secCount);  
    }

}

function addZero(digit){
    let stringDigit = String(digit)
    if(stringDigit.length < 2){
        stringDigit = "0"+stringDigit
        return stringDigit; 
    }else{
        return stringDigit;
    }
}
location.reload(true)  