// scrivere un programma che stampi i numeri da 1 a 100 e al posto dei multipli di 3 deve stampare fizz, al posto dei multipli di 5 deve stampare buzz e al posto dei multipli sia di 3 che di 5 deve stampare fizzbuzz;
// per prima cosa creo la lista di numeri da 0 a 100 e la stampo
for (var i = 1; i < 101; i++) {
    //dichiaro variabile per indicare il numero corrente
    var numero_corrente = i;
    // divido ciacun numero per 15 e ne ricavo il resto
    var fizzbuzz = numero_corrente % 15;
    // divido ciascun numero per 3 e ne ricavo il resto
    var fizz = numero_corrente % 3;
    // divido ciascun numero per 5 e ne ricavo il resto
    var buzz = numero_corrente % 5;

    // inserisco prima la condizione della divisione per 15 altrimenti verrebbe sovrascritta dalle successive
    // quindi se il resto della divisione di ciascun numero per 15 risultasse 0 stampo fizzbuzz
    if (fizzbuzz == 0) {
        console.log(numero_corrente + ' fizzbuzz');

    // altrimenti se il resto della divisione di ciascun numero per 5 risultasse 0 stampo buzz
    } else if (buzz == 0) {
        console.log(numero_corrente + ' buzz');
    // altrimenti se il resto della divisione di ciascun numero per 3 risultasse 0 stampo fizz
    } else if (fizz == 0){
        console.log(numero_corrente + ' fizz');
    // altrimenti, se nussuna della condizioni qui sopra risultasse vera stampo solamente il numero
    } else {
        console.log(numero_corrente);
    }


}



// se il resto è zero stampo fizz al posto del numero

// se il resto è zero stampo buzz al posto del numero

// se il resto è zero stampo fizzbuzz al posto del numero
