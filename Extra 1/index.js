const radios = document.querySelectorAll('input[type=radio][id=present]');
const result = document.querySelector('.result');
// const out1 = document.getElementById('out1');

let count = 0;
radios.forEach(rad=>{
    rad.addEventListener('click',()=>{
        
        count++;
        console.log(count)
        result.textContent = count;
    })
})

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