let input = document.getElementById('InputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        console.log("clicked", e.target.innerHTML)
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {

            string += e.target.innerHTML;
            input.value = string;
        }
    })
})