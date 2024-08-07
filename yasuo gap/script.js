let calcCounter = 0;

function getHistory() {
    return document.getElementById("history-value").innerText;
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
}

function getOutput() {
    return document.getElementById("output-value").innerText;
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    } else {
        document.getElementById("output-value").innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id == "backspace") {
            var output = reverseNumberFormat(getOutput()).toString();
            if (output) { // if output has a value
                output = output.substr(0, output.length - 1);
                printOutput(output);
            }
        } else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseNumberFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                    displayMessage();
                } else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseNumberFormat(getOutput());
        if (!isNaN(output)) { // if output is a number
            output = output + this.id;
            printOutput(output);
        }
    });
}

function displayMessage() {
    calcCounter++;
    switch (calcCounter) {
        case 1:
            document.getElementById("output-value").innerText = "Oi vidinha! 💖";
            break;
        case 2:
            document.getElementById("output-value").innerText = "Fiz esse presentinho pra você";
            break;
        case 3:
            document.getElementById("output-value").innerText = "Espero que goste";
            break;
        case 4:
            window.location.href = '/boiolinha-main/yasuo gap/html/teste.html'; // Substitua pelo URL desejado
            break;
    }
}

function checkColor() {
    const colorInput = document.getElementById('colorInput').value.toLowerCase();
    const container = document.getElementById('container');

    if (colorInput === 'vermelho') {
        container.innerHTML = '';
        const message = document.createElement('p');
        message.innerText = 'Se a cor que você viu é vermelho, significa que está apaixonado por mim e você acha que veriamos nos casar e nos amar um ao outro';
        message.style.fontSize = '24px';
        message.style.color = 'var(--cor-3)';
        message.style.margin = '0';
        container.appendChild(message);
    }
}