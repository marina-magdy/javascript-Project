function reverseString(str) {
    return str.split("").reverse().join("");
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function filterArray(arr, condition) {
    return arr.filter(element => condition(element));
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}
function fibonacci(n) {
    const sequence = [0, 1];

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
}

