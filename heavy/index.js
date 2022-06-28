const btn = document.getElementById('submit');
const firstLast = document.getElementById('firstName');
const lastName = document.getElementById('lastName');


btn.addEventListener('click', e => {
    e.preventDefault();
    let first = firstName.value;
    let second = lastName.value;
    console.log(first)
})