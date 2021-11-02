
// Girilen sayıların asallığını kontrol etme
let infinityParams = function (...params) {
    let total = 0
    for (let i = 0; i < params.length; i++) {

        for (let j = 2; j < params[i]; j++) {
            if (params[i] % j == 0) {
                total++;
            }
        }

        if (total == 0) {
            console.log("Asal Sayı : " + params[i])
        }
        else {
            console.log("Asal Değil : " + params[i])

        }
        total = 0
    }

}
infinityParams(4, 5, 23, 43, 11, 76,3,91,103,22,21,55,44);

//Arkadaş sayılar
let friendNumber = function (num1, num2) {
    let toplam = 0;
    for (let i = 1; i < num1; i++) {
        if (num1 % i == 0) {
            toplam += i
        }
    }
    if (toplam == num2) {
        console.log("Bu sayılar arkadaş sayıdır")
    }
    else {
        console.log("Arkadaş sayı değiller")
    }
}

friendNumber(220,284)


//Mükemmel sayılar
let perfectNumber = function () {
    let everyNumber =1
    for (let i = 3; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                everyNumber += j
                
            }
        }
        if (everyNumber == i) {
            console.log(i)
        }
        everyNumber=1
    }
}
perfectNumber()

//1000"e kadar olan asal sayılar
let asalNumber = function(){
  let  total =0 ;
    for (let i = 3; i <= 1000; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                total++;
            }
        }
        if (total == 0) {
            console.log("Asal sayı : " + i)
        }
        total =0
    }
}
asalNumber()