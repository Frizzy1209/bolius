

const calculateBtn = document.querySelector('.getNumber')


calculateBtn.addEventListener('click', function ()
{
    num1 = parseInt(document.querySelector("#firstNumber").value);
    num2 = parseInt(document.querySelector("#secondNumber").value);
    var sumOfNumbers = num1 * 4 + num2;
    document.querySelector("#result").innerHTML = sumOfNumbers;

    console.log(sumOfNumbers)
})

