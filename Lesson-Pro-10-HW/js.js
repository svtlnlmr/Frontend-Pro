function task1() {
    let coffeeMachine = {
        message: 'Your coffee is ready!',
        start: function () {
            let showMessage = () => setTimeout(() => console.log(this.message), 3000)
            showMessage();
        }
    }
    coffeeMachine.start(); // 'Your coffee is ready!'

    let teaPlease = {
        message: 'Wanna some tea instead of coffee?',
    }
    coffeeMachine.start.bind(teaPlease)(); // 'Wanna some tea instead of coffee?'
}

function task2() {
    function concatStr(phrase, separator, name) {
        console.log(phrase + separator + name);
    }

    concatStr('Hello', ' ', 'Matt'); // 'Hello Matt'

    let user = {
        phrase: "hello",
        hello(name) {
            concatStr(this.phrase, ', ', name);
        }
    };

    let hello = user.hello.bind(user);

    let finalResult1 = hello('Matt') // 'Hello Matt'
    let finalResult2 = hello('John') // 'Hello John'
}

function task3() {
    // setInterval
    let showNumbers = function (min, max, interval) {
        let startNum = min;
        let timer = setInterval(() => {
            console.log(startNum);
            if (startNum === max) {
                clearInterval(timer);
            }
            startNum++;
        }, interval);
    }
    showNumbers(5, 10, 500); // 5 6 7 8 9 10

    // setTimeout (recursion)
    let showNumbers2 = function (min, max, interval) {
        let startNum2 = min;
        setTimeout(function timer2() {
            console.log(startNum2);
            if (startNum2 < max) {
                setTimeout(timer2, interval);
            }
            startNum2++;
        }, interval);
    }
    showNumbers2(5, 10, 500); // 5 6 7 8 9 10
}

function task4() {
    function addBase(base) {
        return function (num) {
            return base + num;
        };
    }

    let addOne = addBase(1);
    alert(addOne(5) + addOne(3));

    // результат выполнения будет 10, потому что:
    // действие 1: вызываем addOne, которая равна (1 + num) и передаем num = 5 ---> результат выполнения = 6
    // действие 2: вызываем addOne, которая равна (1 + num) и передаем num = 3 ---> результат выполнения = 4
    // действие 3: addOne (результат 6) + addOne (результат 4) = 10
}