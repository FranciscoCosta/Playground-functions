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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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
