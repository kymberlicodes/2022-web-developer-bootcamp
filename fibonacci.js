var n = 5;

function fibonacciGenerator(n) {
    var arr = [];
    var count = n;
    if (n === 1) {
        arr = [0]
        return arr;
    } else if (n === 2) {
        arr = [0, 1];
        return arr;
    } else {
        arr = [0, 1];
        while (count > 0) {
            for (var i = 0; i <= arr.length; i++) {
                arr.push(arr[-2] + arr[-1]);
                count--;
            }
        }
        return arr;
    }
}

console.log(fibonacciGenerator(n));