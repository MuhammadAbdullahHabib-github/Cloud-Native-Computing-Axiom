const currencyOnePicker = document.querySelector('#currency-one');
const currencyTwoPicker = document.querySelector('#currency-two');
const currencyOneAmount = document.querySelector('#amount-one');
const currencyTwoAmount = document.querySelector('#amount-two')

const flipButton = document.querySelector('#flip-btn');
const rate = document.querySelector('#rate');
// rate.style.backgroundColor = 'black';

//Fetch exchange rate from API
function calculate () {
        //value of slecet one
     const currencyOneCode = currencyOnePicker.value;
      //value of slecet two
     const currencyTwoCode = currencyTwoPicker.value;
    fetch( `https://v6.exchangerate-api.com/v6/de0bf0dc95108f6fdf4c92d4/latest/${currencyOneCode}`)
    .then( res => res.json())
    .then( data => {
            const exchangeRate = data.conversion_rates[currencyTwoCode];
            rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;
            currencyTwoAmount.value = (currencyOneAmount.value * exchangeRate).toFixed(2);   
    })
}


function flip () {
        const temp = currencyOnePicker.value ;
        currencyOnePicker.value = currencyTwoPicker.value;
        currencyTwoPicker.value = temp ;
        calculate();
}
//Event Listners

currencyOnePicker.addEventListener('change' , calculate);
currencyTwoPicker.addEventListener('change' , calculate);
currencyOneAmount.addEventListener('input',calculate);
currencyTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);
// calculate();
