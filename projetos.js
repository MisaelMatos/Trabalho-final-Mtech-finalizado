// Funções para a calculadora
let display = document.getElementById('display');
let currentInput = "";

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    currentInput += ` ${operator} `;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Erro";
    }
}

// Função para cálculo de imposto
function calculateTax() {
    let income = document.getElementById('income').value;
    let taxResult = document.getElementById('tax-result');
    if (income <= 0) {
        taxResult.textContent = "Informe um valor válido de renda.";
        return;
    }
    
    let tax = 0;

    // Lógica simples para cálculo de imposto
    if (income <= 2500) {
        tax = income * 0.05;
    } else if (income <= 5000) {
        tax = income * 0.1;
    } else if (income <= 10000) {
        tax = income * 0.15;
    } else {
        tax = income * 0.2;
    }

    taxResult.textContent = `Imposto a pagar: R$ ${tax.toFixed(2)}`;
}


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulação de autenticação (usuário e senha fixos)
    if (username === "admin" && password === "12345") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar para outra página
        window.location.href = "pagina-principal.html";  // Exemplo de redirecionamento
    } else {
        errorMessage.textContent = "Usuário ou senha inválidos.";
        errorMessage.style.display = "block";
    }
});


function drawLottery() {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);
    let lotteryResult = document.getElementById('lottery-result');

    if (min >= max) {
        lotteryResult.textContent = "O valor mínimo deve ser menor que o valor máximo.";
        return;
    }

    // Sorteio de um número aleatório entre min e max
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    lotteryResult.textContent = `Número sorteado: ${randomNumber}`;
}