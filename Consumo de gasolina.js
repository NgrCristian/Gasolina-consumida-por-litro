let n1 = Number(prompt('Digite a distancia percorrida em km'))
let n2 = Number(prompt('Digite a quantidade de litros utilizada'))

consumo = n1/n2

alert(`A cada ${n1}km é utilizado ${n2}litros, o consumo medio desse carro é de ${consumo.tofixed(3)}`)
