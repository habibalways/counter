const up = document.getElementById('up');
const start = document.getElementById('start');
const h1 = document.getElementById('heading');
const heading1 = document.getElementById('heading1');
const down = document.getElementById('down');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const reset2 = document.getElementById('reset2');
const no1 = document.getElementById('no1');
const no2 = document.getElementById('no2');
const no3 = document.getElementById('no3');
const para=document.getElementById('para')
const para2=document.getElementById('para2')
let count = 0;

up.onclick = () => {
    
    count++;
    if (count < 11) {
        h1.style.color = '';
        h1.innerHTML = count;
        para.innerHTML = "";
    } else {
        count = 10;
        h1.style.color = 'red';
        no1.play();
        para.innerHTML = `Don't click here. Please Click the "Down" OR "Reset" BUTTON`;
        para.style.color = 'red';
    }
    
}
down.onclick = () => {
    
    count--;
    if (count >= 0) {
        h1.style.color = '';
        h1.innerHTML = count;
        para.innerHTML = "";
    } else {
        count = 0;
        no2.play();
        para.innerHTML = `Don't click here. Please Click the "UP" OR "Reset" BUTTON`;
        para.style.color = 'red';
        h1.style.color = 'red';
        
    }
}
reset.onclick = () => {
    no3.play()
    count = 0; 
    h1.style.color = '';
    h1.innerHTML = count;
    para.innerHTML = "All clear";
    para.style.color = 'green';
    setTimeout(() => {
        para.innerHTML = "";
    },3000)

}
/*
stop watch js
*/
let counter = 0;
stopWatch = '';
start.onclick = () => {
    
    stopWatch = setInterval(() => {
        counter++;
        heading1.innerHTML = counter;
        heading1.style.color = '';
        
        if (counter == 30) {
            heading1.style.color = 'green';
            no6.play();
            clearInterval(stopWatch)
            
        }
        
    }, 1000);
    no1.play();
    
}
stop.onclick = ()=>{
    clearInterval(stopWatch);
    no6.pause();
    no1.play();
}
reset2.onclick = () => {
    counter = '0';
    heading1.innerHTML = counter;
    no6.pause();
    no1.play();
    heading1.style.color = '';
    clearInterval(stopWatch)

}

