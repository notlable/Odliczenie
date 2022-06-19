const endTime =new Date('2022-06-19 12:15:00').getTime()
console.log(endTime)

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(()=>{
    const nowTime = new Date().getTime()
    const time = endTime - nowTime
    console.log(time)


    const sec = Math.floor((time / 1000) % 60);
    const min = Math.floor((time / (1000 * 60))%60);
    const min = Math.floor((time / (1000 * 60))%60);
        if (sec == 0){
            spanM.textContent = min;
        }
        if (min == 0){
            spanH.textContent = hour;
        }
    spanS.textContent = sec;
}, 1000)