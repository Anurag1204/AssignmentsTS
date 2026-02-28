function calculatePower(x: number, n: number): number {
    let result: number = 1;

    if (n > 0) {
        for (let i: number = 1; i <= n; i++) {
            result = result * x;
        }
    }
    else if (n < 0) {
        for (let i: number = -1; i >= n; i--) {
            result = result * (1 / x);
        }
    }
    else if(n==0){
        result = 1;
    }

    return result;
}

console.log(calculatePower(2, 10));
console.log(calculatePower(2.1, 3));
console.log(calculatePower(2, -2));
console.log(calculatePower(4, 0));