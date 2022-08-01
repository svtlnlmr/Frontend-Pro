function task1() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello!!!'), 3000);
    });
    promise.then(console.log);
}

function task2() {
    const promise = new Promise((resolve, reject) => {
        const randomNum = Math.floor(Math.random() * 11);
        if (randomNum % 2 === 0) {
            resolve(`${randomNum} - Even number`);
        }
        reject(`${randomNum} - NOT even number`);
    });
    promise
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error); // вывести ошибку
        });
}

function task3() {
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function sleep() {
        console.log('first call');
        await delay(4000);
        console.log('second call');
    }
    sleep().then();

}

