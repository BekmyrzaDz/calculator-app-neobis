const calc = document.querySelector('.calculator'),
  output = document.querySelector('.input');

calc.addEventListener('click', (e) => {
  if (!e.target.classList.contains('item')) return;

  const value = e.target.innerText;
  console.log(output.value);

  switch (value) {
    case 'C':
      output.value = '';
      break;
    case 'D':
      const back = output.value;
      output.value = back.substring(0, back.length - 1);
      break;
    case '=':
      let out = output.value;

      if (parseFloat(out).toFixed(1) % 2 == 0) {
        output.value = eval(out).toFixed();
      } else {
        output.value = eval(out).toFixed(2);
      }

      break;

    default:
      output.value += value;
      break;
  }
});