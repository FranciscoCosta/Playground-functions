// Desafio 11
function generatePhoneNumber(array) {
  let a = array.length;
  cont = 0;
  contMax = 0;
  final =""
  if(a!=11){
    return "Array com tamanho incorreto."
  }else{
    for(let i=0;i<a;i+=1){
      if(array[i]<0 || array[i]>=10) {
        return "não é possível gerar um número de telefone com esses valores"
      }else{
      for (z in array){
        if(array[i]==array[z]){
          cont +=1;
        }if (cont > contMax){
          contMax = cont;
        }
      }
      cont = 0
    }if(contMax >= 3){
      return "não é possível gerar um número de telefone com esses valores"
    }
    }
  }
  array.unshift("(");
  array.splice(3,0,")")
  array.splice(4,0," ")
  array.splice(10,0,"-")
  final = array.join("")
  return final
  }
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 5, 7, 8, 9, 0, 10]))


// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if(lineA+lineB > lineC && lineB+lineC > lineA && lineA + lineC> lineB){
    if(Math.abs(lineA-lineB)< lineC && Math.abs(lineA-lineC)< lineB && Math.abs(lineC-lineB) < lineA){
      return true;
    }else{
      return false;
    }

  }else{
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  soma = 0;
  numeros = string.match(/\d+/g);
  let numerosInt = numeros.map(Number);
  for(let i = 0; i<numerosInt.length;i+=1){
    soma += numerosInt[i]
  }
  if (soma === 1){
    return soma + " copo de água"
  }else{
    return soma + " copos de água"
  }
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
