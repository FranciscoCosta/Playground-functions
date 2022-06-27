// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  b = (base * height) / 2;
  return b;
}

// Desafio 3
array = [];
function splitSentence(text) {
  let array = text.split(' ');
  return array;
}

// Desafio 4
function concatName(array1) {
  let array2 = [];
  let a = array1[0];
  let b = array1[array1.length - 1];
  return b + ',' + ' ' + a;
}

// Desafio 5
function footballPoints(wins, ties) {
  total = wins * 3 + ties;
  return total;
}

// Desafio 6
function highestCount(numeros) {
  let a = 0;
  let cont = 0;
  a = Math.max(...numeros);
  for (i = 0; i < numeros.length; i += 1) {
    if (numeros[i] === a) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let m = Math.abs(mouse);
  let c1 = Math.abs(cat1);
  let c2 = Math.abs(cat2);
  let d1 = m - c1;
  let d2 = m - c2;
  let d3 = Math.abs(d1);
  let d4 = Math.abs(d2);
  if (d3 > d4) {
    return 'cat2';
  } else if (d4 > d3) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz(array) {
  let novo = [];

  for (i in array) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      novo.push('fizzBuzz');
    } else if (array[i] % 3 == 0 && array[i] % 5 !== 0) {
      novo.push('fizz');
    } else if (array[i] % 5 == 0 && array[i] % 3 !== 0) {
      novo.push('buzz');
    } else {
      novo.push('bug!');
    }
  }
  return novo;
}

// Desafio 9

function encode(string) {
let x = [];
  for (i of string) {
    if (i === 'a') {
      x.push(1);
    } else if (i == 'e') {
      x.push(2);
    } else if (i == 'i') {
      x.push(3);
    } else if (i == 'o') {
      x.push(4);
    } else if (i == 'u') {
      x.push(5);
    } else {
      x.push(i);
    }
  }
  return (x.join(""));
}
console.log(encode('hi there!'));

function decode(string) {
  let x = [];
  for (i of string) {
    if (i === '1') {
      x.push("a");
    } else if (i == '2') {
      x.push("e");
    } else if (i == '3') {
      x.push("i");
    } else if (i == '4') {
      x.push("o");
    } else if (i == '5') {
      x.push("u");
    } else {
      x.push(i);
    }
  }
  return (x.join(""));
}
console.log(decode('h3 th2r2!'))


// Desafio 10
function techList(array, string) {
  let final = []
  if(array.length === 0 || string.length ===0){
    return "Vazio!"
  }else {
    array = array.sort();
    for( i in array){
      final.push({
        tech: array[i],
        name: string
      });
    }
  return final 
  }

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
