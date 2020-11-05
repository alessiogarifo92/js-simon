// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

// alert 5 numeri casuali diversi
var numeriComputer = [];

// in questo caso meglio usare while perche con il for comunque la i non la utilizzavamo, quindi il while viene eseguito fin tanto che la condizione è vera, quindi fino 5 volte, mentre in quel for infatti non si  sta nemmeno facendo il controllo su quella i, la ignoramo proprio, per quello puo essere tolta
// for (var i = 0; numeriComputer.length < 5; i++)
while (numeriComputer.length < 5) {

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
// array per numeri che andra ad inserire utente
var numeriUtente = [];

// numeri che saranno uguali tra quelli random del computer e quelli che utente indovina
var numeriMatch = [];

// variabile che usiamo per definire i 30 secondi
var count = 30;

// funzione per countdown
function countdown() {
  // impostiamo if per countdown fino a 1
  if (count > 0) {
    console.log(count);
    count--;
  // a 0 scatta scritta finito countdown e interrompiamo con clearInterval
  } else {
    console.log('fintio countdown inserire numeri che si ricordano');
    clearInterval(mioInterval);

    // creiamo ciclo per chiedere 5 numeri ad utente che pusheremo nell'array numeriUtente
    for (var i = 0; numeriUtente.length < 5; i++) {
      var numeriInsUtente = parseInt(prompt('Inserisci numero che ricordi tra 1 e 100'));
      numeriUtente.push(numeriInsUtente);

      // poniamo condizione if nei numeriComputer sono inclusi numeri numeriInsUtente allora pushiamo questi numeri in array numeriMatch
      if (numeriComputer.includes(numeriInsUtente)) {
        numeriMatch.push(numeriInsUtente);
        console.log('numeri che matchano ' + numeriMatch);
      }
    }
  console.log('lista numeri inseriti da utente ' + numeriUtente);

  // software dice quanti e quali numeri azzeccati
  console.log('I numeri che sono stati indovinati sono ' + numeriMatch.length + '/5' + ', e sono ' + numeriMatch + ';');
  }
}
