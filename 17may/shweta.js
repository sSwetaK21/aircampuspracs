console.log(!!null);
// if([]) {
//     console.log('yes')
// }

let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);