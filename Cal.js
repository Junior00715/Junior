let expression = '';
      
      function enviarParaTela(value) {
        expression += value;
        updateDisplay();
      }
      
      function Calcular() {
        try {
          const result = eval(expression);
          expression = result.toString();
          updateDisplay();
        } catch (error) {
          expression = '';
          updateDisplay();
          alert('Erro na expressão!');
        }
      }
      
      function deletar() {
        expression = expression.slice(0, -1);
        updateDisplay();
      }
      
      function resetar() {
        expression = '';
        updateDisplay();
      }
      
      function updateDisplay() {
        const display = document.getElementById('tela');
        display.value = expression;
      }