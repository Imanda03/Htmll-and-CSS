//For the count
const radios = document.querySelectorAll('input[type=radio][id=present]');
const radios2 = document.querySelectorAll('input[type=radio][id=absent]');
const result = document.querySelector('.result');
const result2 = document.querySelector('.result2');

// const out1 = document.getElementById('out1');


let count2 = 0;
radios2.forEach(rad2 => {
    rad2.addEventListener('change', () => {

        count2++;
        console.log(count2);
        result2.textContent = `Total number of absent is ${count2}`;

    })
})


let count = 0;
radios.forEach(rad => {
    rad.addEventListener('change', () => {

        count++;
        console.log(count);
        result.textContent = `Total number of present is ${count}`;
    })
})




//For the selection
selectAll = (form1) => {
    var check = document.getElementsByName("letsCheck")
    var radios = document.form1.elements;

    if (check[0].checked) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type == "radio") {
                if (radios[i].value == 1) {
                    radios[i].checked = true;
                    count++;
                    console.log(count);
                    result.textContent = `Total number of present is ${count - 1}`;
                }
            }
        }
    } else {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].type == "radio") {
                if (radios[i].value == 0) {
                    radios[i].checked = true;
                    count2++;
                    console.log(count2);
                    result2.textContent = `Total number of present is ${count2 - 1}`;
                }
            }
        }
    }
}


// radios.value = true



// radios.forEach(rad =>{
//     var count = 0;
//     if(rad.checked){
//         count++;
//     }
//     console.log('count'
// })

// var count =0;
// for(var i = 0; i<radios.length;i++){
//     var rad = radios[i];
//     if(rad.checked){
//         count++
//     }
//     console.log(count)
// }