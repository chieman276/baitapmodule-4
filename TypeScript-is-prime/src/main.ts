function isPrime (number: number): boolean{
    let isPrime = true;
    if (number < 2){
        isPrime = false
    } else if (number > 2){
        for(let i = 2; i <= Math.sqrt(number); i++){
            if (number % i == 0 ){
                isPrime = false;
                break;
            }
        }

    }
    return isPrime;
}

let array = [1,5,9,2,6,7,11,35,39,43,34,56];
let sum = 0;
for (let number of array){
    if (isPrime(number)){
        sum += number;
    }
}

console.log("Tổng các số nguyên tố trong mảng trên là: " + sum);