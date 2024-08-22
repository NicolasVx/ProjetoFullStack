function calcular() {
  var peso = parseFloat(document.form1.peso.value);
  var altura = parseFloat(document.form1.altura.value);
 
  var imc = peso / (altura * altura);
  var classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    }else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal";
    }else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso";
    }else {
      classificacao = "Obesidade";
    }

    document.form1.resultado.value = imc.toFixed(2);
    document.form1.classificacao.value = classificacao;
    }