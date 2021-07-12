



document.querySelector('button').addEventListener('click',  Calc)

function Calc() {
        var choiseMoney = document.querySelector("#choise")
        // смотрим какую валюту считать
        var resultMoneyDollar = document.querySelector("#dollar");
        var resultMoneyEuro = document.querySelector("#euro");
        // обращемся к ячейке которая будет выводить результат
        var money = document.querySelector("#result").value;
        // Сумма которую будем конвертировать
        var dollar = 80; 
        var euro = 90;
        // переменные которые будут нам помогать считать
           if(choiseMoney.value === "dollar") {
               resultMoneyDollar.innerHTML = "<h1> Ваш курс:" + money/dollar + "Долларов </h1>";
           };
            if (choiseMoney.value === "euro"){
               resultMoneyEuro.innerHTML = "<h1> Ваш курс:" + money/euro + " Евро </h1>";
           }
        //    проверяем условия через переменную choiseMoney, и в зависимости выводим результат

    }

    
