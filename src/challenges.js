// Desafio 1
function compareTrue(p1,p2) {
  if(p1===true && p2 ===true){
    return true;
  }else {
    return false;
  }
}

// Desafio 2
function calcArea(base,height) {
  b =(base*height)/2
  return b
}

// Desafio 3
array = []
function splitSentence(text) {
  let array = text.split(" ");
  return array;
}

// Desafio 4
let array2 = []
function concatName(array1) {
  for(let i=0; i< array1.length-1; i+=1) {
     array2.push(array1[i])
  }
    array2.unshift(array1[array1.length-1]);
  return array2
}


// Desafio 5
function footballPoints(wins,ties) {
  total = (wins*3) + (ties);
  return total
}

// Desafio 6
function highestCount(numeros) {
  let a = 0;
  let cont = 0;
  a = Math.max(...numeros)
    for(i=0;i<numeros.length; i+=1){
      if(numeros[i] === a){
        cont+=1;
      }
    }
  return cont
}



// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let m = Math.abs(mouse);
  let c1 = Math.abs(cat1);
  let c2 = Math.abs(cat2);
  let d1 = m - c1;
  let d2 = m - c2;
  let d3 = Math.abs(d1);
  let d4 = Math.abs(d2);
  if(d3>d4){
    return 'cat2'
  }else if (d4>d3){
    return 'cat1'
  }else{
    return 'os gatos trombam e o rato foge'
  }
}
// Desafio 8
function fizzBuzz(array) {
  let novo = []

  for(i in array){
    if(array[i]%3== 0 && array[i]%5==0){
      novo.push('fizzBuzz')
    }else if(array[i]%3== 0 && array[i]%5!==0){
      novo.push('fizz')
    }else if(array[i]%5== 0 && array[i]%3!==0){
      novo.push('buzz')
    }else{
      novo.push('bug!')
    }
   }
  return novo
}
console.log(fizzBuzz([7, 9]))

// Desafio 9

function encode(string) {
codigo = {
  a:1,
  e:2,
  i:3,
  o:4,
  u:5
}
let x = []
for(i of string){
  for(z in codigo){
    if(i===z){
      x.push(codigo[z])
    }else{
      x.push(i)
      break;
    }
  }
}
let resultado = x.join("");
return resultado
}


function decode() {


}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
