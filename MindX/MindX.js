//[BINH, HUNG, PHUOC, CAO, KHANH]
function allLongestStrings() {
    let maxLength = 0;
    let names = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
        }
    }
    for (let j = 0; j < array.length; j++) {
        if (array[j].length === maxLength) {
            names.push(array[j]);
        }
    }
    arrayDisplay(names);
}
//[60, 40, 55, 75, 64] 
function alternatingSums() {
    let sums = [0, 0];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            sums[0]+=parseInt(array[i]);
        } else {
            sums[1]+=parseInt(array[i]);
        }
    }
    arrayDisplay(sums);
}

function createArray() {
    let inputArray = inputBox.value.split(",");
    for (let i = 0; i < inputArray.length; i++) {
        array.push(inputArray[i]);
    }
    inputBox.value = '';
    arrayDisplay(array);
}

function reset() {
    array = [];
    container.innerHTML = "";
}

function arrayDisplay(array) {
    const content = document.createElement('p');
    content.textContent = array;
    container.appendChild(content);
}

let array = [];
const container = document.getElementById('displayArray');
let inputBox = document.getElementById('inputBox');



function displayColor() {
    document.body.style.background = inputColor.value;
}

function colorReset() {
    document.body.style.backgroundColor = 'gray';
    inputColor.value = '';
}

function copyColor() {
    inputColor.select();
    document.execCommand('Copy');
}

function randomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    inputColor.value = '#' + n.slice(0, 6);
}

let inputColor = document.getElementById('inputColor');