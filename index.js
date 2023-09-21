/* 
 
- [OK]  A soma dos dois números;
- [OK]  A subtração dos dois números;
- [OK]  A multiplicação dos dois números;
- [OK]  A divisão dos dois números;
- [OK]  O resto da divisão dos dois números;
- [OK]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [OK]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. 

*/



let NumberOne = prompt("Insira o primeiro numero")
let NumberTwo = prompt("Insira o segundo numero")
let Result 
let Par
const Operator =  [
    {
    Name:"Soma",
    Value: "+"
    },
    {
    Name:"Subtração",
    Value:"-"
    },
    {
    Name:"Multiplicação",
    Value:"*"
    },
    {
    Name:"Divisão",
    Value:"/"
    },
    {
    Name:"Resto da Divisão",
    Value:"%"
    }
]

const MathOperation = (NumberOne, NumberTwo, operator) => {
    switch (operator) {
        case "+":
            return  NumberOne + NumberTwo;
        case "-":
            return  NumberOne - NumberTwo;
        case "*":
            return  NumberOne * NumberTwo;
        case "/":
            return  NumberOne / NumberTwo;
        case "%":
            return  NumberOne % NumberTwo;
        default:
            return "Operador inválido";
    }
};

const MathMessage = (Operator) => {
    return `
    O resultado da ${Operator.Name} é ${MathOperation(Number(NumberOne), Number(NumberTwo), Operator.Value)}
    `
}

for (let operation of Operator) {
    let MessageResult = MathMessage(operation)
    alert(MessageResult)
}

Result = MathOperation(Number(NumberOne), Number(NumberTwo), "+")
Par = MathOperation(Result, 2, "%")
console.log(Par)

 if (Par == 0) {
    alert(`O resultado ${Result} é par`)
} 

else {
    alert(`O resultado ${Result} é Impar`)
}


if (Number(NumberOne) == Number(NumberTwo)) {
    alert(`Os numeros inseridos são iguais!`)
}
else {
    alert(`Os numeros inseridos são diferentes`)
}