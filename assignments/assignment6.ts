function isPrime(num: number): boolean {
    if(num === 1 || num === 0){
        return false;
    }
    else if(num===2 || num === 3){
        return true;
    }
    for (let i: number = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(7));
console.log(isPrime(25));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
