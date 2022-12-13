

const calculateBtn = document.querySelector('.getNumber')

calculateBtn.addEventListener('click', function ()
{

    num1 = parseInt(document.querySelector("#firstNumber").value);
    num2 = parseInt(document.querySelector("#secondNumber").value);

    var sumOfNumbers = new Intl.NumberFormat('dk-DK').format(num1 * 4 + num2)

    document.querySelector("#result").innerHTML = sumOfNumbers + " kr.";
})



ChatbotLink = document.querySelector('#button')

ChatbotLink.addEventListener('click', function() {
    window.open('https://beta.openai.com/playground')

})

