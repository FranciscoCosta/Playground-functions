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
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
