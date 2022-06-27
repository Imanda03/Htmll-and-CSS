console.log('Checked');

const text = document.getElementById('textBox');
const btn = document.getElementById('submit');
const course = document.querySelectorAll('input[type=checkbox][name=course]');
const select2 = document.querySelectorAll('input[type=radio][name=gender]');
const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const output3 = document.getElementById('output3');
const output4 = document.getElementById('output4');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    output.innerText = text.value.toLowerCase();
    // console.log(text.value)
    text.value = "";
    selectFunction();
    radioFunction();
    checkboxFunction();

})




function radioFunction() {
    // var select2 = document.querySelectorAll('input[type=checkbox][name=course]');
    for (var i = 0; i < select2.length; i++) {
        if (select2[i].checked) {
            output2.innerHTML = select2[i].value;
        }
    }
}

function checkboxFunction() {
    for (var i = 0; i < course.length; i++) {
        if (course[i].checked) {
            output3.innerHTML = course[i].value;
        }
    }
}

function selectFunction() {
    var select = document.getElementById('select').selectedIndex;
    output4.innerHTML = document.getElementsByTagName('option')[select].value
}

// gender.forEach(rad => {
//     rad.addEventListener('click', (e) => {
//         output2.innerHTML = e.target.value;
//     })
// })

// course.forEach(cou => {
//     cou.addEventListener('click', e => {
//         output3.innerHTML = e.target.value;
//     })
// })



