//For the count
const radios = document.querySelectorAll('input[type=radio][id=present]');
const result = document.querySelector('.result');
// const out1 = document.getElementById('out1');

let count = 0;
radios.forEach(rad=>{
    rad.addEventListener('click',()=>{
        
        count++;
        console.log(count);
        result.textContent = count;
    })
})

//For the selection
selectAll = (table1)=>{
    var check = document.getElementsByName("letsCheck")
    var radios = document.form1.elements;

    if(check[0].checked){
        for(var i=0;i<radios.length;i++){
            if(radios[i].type == "radio"){
                if(radios[i].value == 1){
                    radios[i].checked =true;
                }
            }
        }
    }else{
            for(var i=0;i<radios.length;i++){
                if(radios[i].type == "radio"){
                    if(radios[i].value == 0){
                        radios[i].checked =true;
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