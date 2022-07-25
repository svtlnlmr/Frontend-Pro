//======================== Task 1 ========================
document.getElementById("submit").onclick = submit_click;

function submit_click() {
    let regexpName = /[a-zA-Z]+/g;
    let strName = document.getElementById("name").value;
    let resultName = (regexpName.test(strName));

    function clearNum(num) {
    return num.replace(/[\s.,()+-]/g, '');
}
    function checkNum(num) {
        if (num.length === 12) {
            let regexp = /^380(39|50|63|66|67|68|91|92|93|94|95|96|97|98|99)?((\d+){7})$/g;
            return regexp.test(num);
        } else if (num.length === 11) {
            let regexp = /^80(39|50|63|66|67|68|91|92|93|94|95|96|97|98|99)?((\d+){7})$/g;
            return regexp.test(num);
        } else if (num.length === 10) {
            let regexp = /^0(39|50|63|66|67|68|91|92|93|94|95|96|97|98|99)?((\d+){7})$/g;
            return regexp.test(num);
        } else if (num.length === 9) {
            let regexp = /^(39|50|63|66|67|68|91|92|93|94|95|96|97|98|99)?((\d+){7})$/g;
            return regexp.test(num);
        } else {
            let regexp = /null/g;
            return regexp.test(num);
        }
    }
    let strPhone = document.getElementById("phone-number").value;
    let strPhoneNew = clearNum(strPhone);
    let resultPhone = checkNum(strPhoneNew);
    console.log(resultPhone);

    let regexpMail = /^[\w\d%$:.-]+@\w+\.\w{2,5}$/g;
    let strMail = document.getElementById("email-address").value;
    let resultMail = (regexpMail.test(strMail));

    function showMessage() {
        if (resultName === false && resultPhone === true && resultMail === true) {
            alert('The form was not submitted. User name entered incorrect. You must use only Latin letters. Please check and try again!');
        } else if (resultName === false && resultPhone === false && resultMail === true) {
            alert('The form was not submitted. User name and phone number entered incorrect. Please check and try again!');
        } else if (resultName === true && resultPhone === false && resultMail === true) {
            alert('The form was not submitted. Mobile phone was entered incorrect. Please check and try again!');
        } else if (resultName === true && resultPhone === false && resultMail === false) {
            alert('The form was not submitted. Phone number and e-mail entered incorrect. Please check and try again!');
        } else if (resultName === true && resultPhone === true && resultMail === false) {
            alert('The form was not submitted. E-mail entered incorrect. Please check and try again!');
        } else if (resultName === false && resultPhone === false && resultMail === false) {
            alert('The form was not submitted. All fields was filled incorrect. Please check and try again! (please use the hits)');
        } else if (resultName === true && resultPhone === true && resultMail === true) {
            alert('The form was sent successfully!');
        }
    }
    showMessage();
}

//======================== Task 2 ========================
let x, y = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
ctx.moveTo(0, 0);
ctx.length = 10;
ctx.strokeStyle = 'blue';

canvas.onclick = function (event) {
    x = event.offsetX;
    y = event.offsetY;
    ctx.lineTo(x, y); //рисуем линию
    ctx.stroke();
}

//======================== Task 3 ========================
let element = document.querySelectorAll('.color');
for (let i = 0; i < element.length; i++) {
    element[i].onclick = () => {
        document.getElementById('line').style.background = element[i].dataset.color;
    }
}

//======================== Task 4 ========================
let link = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
let str = 'https://lms.ithillel.ua/groups/626bce658f722e7214b0a79f/homeworks/62d99389c3325a39d31c704b'
let result = link.test(str);
console.log('checked link result ======>', result);
