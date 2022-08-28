//==========================TASK 1==========================
const data = {
    lastClicked: 0,
}
document.getElementById('count').addEventListener('click', onClickCheck);

function onClickCheck() {
    const timeNow = (new Date()).getTime();

    if (data.lastClicked > 0) {
        const resInSec = Math.floor((timeNow - data.lastClicked) / (1000));
        console.log(`${resInSec} seconds have passed`);
    }
    else {
        console.log('Enabled');
    }

    data.lastClicked = timeNow;
}

//==========================TASK 2==========================
let userInfo = {
    interval: '',
    time: 0,
}
userInfo.time = 3;

function timer(time) {

    time = userInfo.time;
    const min = Math.floor(time % 3600 / 60);
    const sec = Math.floor(time % 3600 % 60);
    const minDisplay = min <= 9 ? `0${min}` : `${min}`;
    const secDisplay = sec <= 9 ? `0${sec}` : `${sec}`;

    userInfo.time--;
    if (time < 1 || time === 0) {
        clearTimeout(time);
        console.log('Time End');
    } else {
        userInfo.interval = setTimeout(timer, 1000);
        console.log(`${minDisplay}:${secDisplay}`);
    }
}
document.getElementById('start').onclick = function () {
    timer();
}
document.getElementById('stop').onclick = function () {
    clearTimeout(userInfo.interval);
}

//============ TASK 2 (не хочет работать....в чем моя ошибка здесь? ==========================
// function Timer(startingTime) {
//
//     this.time = startingTime;
//     this.min = Math.floor(this.time % 3600 / 60);
//     this.sec = Math.floor(this.time % 3600 % 60);
//     this.minDisplay = this.min <= 9 ? `0${this.min}` : `${this.sec}`;
//     this.secDisplay = this.sec <= 9 ? `0${this.min}` : `${this.sec}`;
//
//     this.interval = function () {
//         setTimeout(Timer, 1000);
//     };
//
//     this.count = function () {
//         this.time--;
//         if (this.time < 1 || this.time === 0) {
//             clearTimeout(this.interval);
//             console.log('Time End');
//         } else {
//             this.interval();
//             console.log(`${this.minDisplay}:${this.secDisplay}`);
//         }
//     }
// }
//
// let timer = new Timer(10);
// timer.count();

