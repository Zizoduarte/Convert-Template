// Cotação de moedas do dia
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const form = document.querySelector('form');
const amount = document.querySelector('input');
const currency = document.querySelector('select');
const footer = document.querySelector('main footer');
const description = document.querySelector('footer span');
const result = document.querySelector('#result');

// Manipulando o input amount para receber somente números
amount.addEventListener('input', () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, '');
});

// Capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault();

  switch(currency.value){
    case 'USD':
      convertCurrency(amount.value, USD, 'US$');
      break;
    case 'EUR':
      convertCurrency(amount.value, EUR, '€');
      break;
    case 'GBP':
      convertCurrency(amount.value, GBP, '£');
      break;
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol){
  
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;
    footer.classList.add("show-result");

    let total = amount * price;
    total = formatCurrencyBRL(total).replace("R$", "");

    result.textContent = `${total} Reais`;

  } catch (error) {
    footer.classList.remove("show-result");
    alert("Ocorreu um erro", error);
    
  }
}

// Formata a moeda em Real Brasileiro
function formatCurrencyBRL(value){
  return Number(value).toLocaleString('pt-BR', 
    {
      style: 'currency',
      currency: 'BRL' 
      
    });
}