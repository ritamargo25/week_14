let act;
function func() {
    let result;
    let number1 = (document.getElementById('number1').value);
    let number2 = (document.getElementById('number2').value);
    switch (act) {
        case '+':
            result = +number1 + +number2;
            break;
    }
    switch (act) {
        case '-':
            result = number1 - number2;
            break;
    }
    switch (act) {
        case '*':
            result = number1 * number2;
            break;
    }
    switch (act) {
        case '/':
            result = number1 / number2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}
