do{
n1 = parseInt(prompt("Digite um número:"))
n2 = parseInt(prompt("Digite outro número:"))
op = prompt ("1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n\nQual a sua opção?")
    if(op==1){
        n3 = n2 + n1
        op = "+"
    }else if(op ==2){
        n3 = n1 - n2
        op = "-"
    }else if(op == 3){
        n3 = n1 * n2
        op = "*"
    }else if(op == 4){
        n3 = n1 / n2
        op = "/"
    }
}while(confirm(n1+op+n2+" = "+n3+"\n\nDeseja calcular outro?")==1)
