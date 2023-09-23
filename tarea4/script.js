function calculate() {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
  
    for (let i = 1; i <= 5; i++) {
      let result;
      switch (i) {
        case 1:
          result = numero1 + numero2;
          resultsDiv.innerHTML += `En la PRIMERA iteración: SUMA = ${result}<br>`;
          break;
        case 2:
          result = numero1 - numero2;
          resultsDiv.innerHTML += `En la SEGUNDA iteración: RESTA = ${result}<br>`;
          break;
        case 3:
          result = numero1 * numero2;
          resultsDiv.innerHTML += `En la TERCERA iteración: MULTIPLICACIÓN = ${result}<br>`;
          break;
        case 4:
          if (numero2 !== 0) {
            result = numero1 / numero2;
            resultsDiv.innerHTML += `En la CUARTA iteración: DIVISIÓN = ${result}<br>`;
          } else {
            resultsDiv.innerHTML += `En la CUARTA iteración: No es posible dividir por 0<br>`;
          }
          break;
        case 5:
          result = numero1 % numero2;
          resultsDiv.innerHTML += `En la QUINTA iteración: MOD(%) = ${result}<br>`;
          break;
        default:
          break;
      }
    }
  }
  