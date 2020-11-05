// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// alert 5 numeri casuali diversi
var numeriComputer = [];

for (var i = 0; numeriComputer.length < 5; i++) {

  var numeriRandom = getRandomNum(100);

  if(numeriComputer.indexOf(numeriRandom) === -1) {
    numeriComputer.push(numeriRandom);
  }
}

alert(numeriComputer);
console.log(numeriComputer);

// numeri random computer
function getRandomNum(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

// dopo 30 secondi 5 prompt con numeri visti precedentemente
var mioInterval = setInterval(countdown , 1000);
var numeriUtente = [];

var count = 3;

function countdown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('fintio countdown inserire numeri che si ricordano');
    clearInterval(mioInterval);
    for (var i = 0; numeriUtente.length < 5; i++) {
      var numeriInsUtente = parseInt(prompt('Inserisci numero che ricordi tra 1 e 100'));
      numeriUtente.push(numeriInsUtente);
    }
  console.log(numeriUtente);

    // for (var i = 0; i < 5; i++) {
    //   if (numeriComputer.includes(numeriInsUtente)){
    //     console.log('bravo');
    //   }
    // }
    // });

  function allMatch(number) {
    return ;
  }
  console.log(numeriComputer.every(allMatch));


  }
}

// software dice quanti e quali numeri azzeccati
