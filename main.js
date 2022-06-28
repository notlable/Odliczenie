const endTime =new Date('2022-07-09 00:00:00').getTime()
console.log(endTime)

const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

setInterval(()=>{
    const nowTime = new Date().getTime()
    const time = endTime - nowTime
    


    const sec = Math.floor((time / 1000) % 60);
    const min = Math.floor((time / (1000 * 60))%60);
    const hour = Math.floor((time / (1000 * 3600))%60);
    const day = Math.floor((time / (1000 * 86400))%24);

            spanM.textContent = min;
            spanH.textContent = hour;
            spanD.textContent = day;

    spanS.textContent = sec;
    // console.log(sec)
}, 1000)
