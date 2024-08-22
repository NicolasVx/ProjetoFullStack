function calcular(){
    valor1 = parseInt(document.form1.n1.value)
    valor2 = parseInt(document.form1.n2.value)
    operacao = document.form1.op.value
    if(operacao=="+"){
        r = valor1 + valor2
    }else if (operacao=="-"){
        r = valor1 - valor2
    }else if (operacao=="*"){
        r = valor1 * valor2
    }else if (operacao=="/"){
        r = valor1 / valor2
    }
    document.form1.resultado.value = r
}