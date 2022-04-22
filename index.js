let elForm = document.querySelector('.form');
let elCelsiusInput = document.querySelector('.celsius-input');
let elFahrenheitinput = document.querySelector('.fahrenheit-input');

let elCelciusResult = document.querySelector('.result-celsius');

 elCelsiusInput.addEventListener('input', function(){
  let elFahrenheitResult = parseFloat(elCelsiusInput.value.trim(), 10) * 9/5 + 32;
  elFahrenheitinput.value = elFahrenheitResult;
  elCelciusResult.textContent = elCelsiusInput.value + '°C =' + elFahrenheitResult;
 });


 elFahrenheitinput.addEventListener('input', function(){
  let elCelsiusResult = (parseFloat(elFahrenheitinput.value.trim(), 10)- 32 ) * 5/9;
  elCelsiusInput.value = elCelsiusResult;
  elCelciusResult.textContent = '(' + elFahrenheitinput.value + '°F =' + elCelsiusResult;
 })