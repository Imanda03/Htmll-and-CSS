
const present = document.getElementById('present');
const absent = document.getElementById('absent');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');
const submit = document.querySelector('#submit');
const btn = document.querySelectorAll('input[type=radio][name=btn]');

var presentCount = 0;
var absentCount = 0
btn.forEach(rad => {
    rad.addEventListener('click', () => {
        // if (present.checked) {
        //     presentCount++;
        //     result.textContent = `Total number of present is ${presentCount}`;
        // } else {
        //     absentCount++;
        //     result2.textContent = `Total number of absent is ${absentCount}`
        // }
        var count = present.checked ? presentCount++ : absentCount++ && presentCount--;
    })
})




//ternary operator
