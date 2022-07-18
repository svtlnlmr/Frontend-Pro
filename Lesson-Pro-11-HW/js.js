// ============================ TASK 1 ============================

function changeTextColor(id, selector, color) {
    let element = document.getElementById(id);
    let elementChild = element.querySelectorAll(selector);
    return elementChild[elementChild.length - 1].style.color = color;
}

changeTextColor('main', 'p', 'salmon');

function replaceNodes(id1, id2) {
    let elem1 = document.getElementById(id1);
    let elem2 = document.getElementById(id2);
    return elem2.replaceWith(elem2, elem1);
}

replaceNodes('footer', 'main');

// ============================ TASK 2 ============================

let color = document.querySelectorAll('.color');
let colorSet = [
    {name: 'red', interval: 3000},
    {name: 'yellow', interval: 3000},
    {name: 'green', interval: 3000},
];
let count = 0;
setTimeout(function changeColor() {
    if (color.length === count) {
        count = 0;
    }
    color.forEach(color => color.style.background = '');
    color[count].style.background = colorSet[count].name;
    setTimeout(changeColor, colorSet[count].interval);
    count++;
}, 3000);

// ============================ TASK 3 ============================
let myTable = document.querySelector('#table');
let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

function fillTable(table, arr) {
    for (let i = 0; i < arr.length; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < arr[i].length; j++) {
            let td = document.createElement('td');
            td.innerHTML = arr[i][j];
            tr.appendChild(td);
        }
        myTable.appendChild(tr);
    }
}

fillTable(myTable, array);



