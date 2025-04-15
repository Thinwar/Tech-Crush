// # 30 JavaScript Exercises for Students

// 1. Create a variable to store your name and display it in an alert.

let firstname= "Warren";
let secondname="Thinwar";

console.log("Alert" + " "+ firstname +" " +secondname); 


// 2. Declare two number variables and show their sum, difference, product, and quotient.
let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Sum: " + sum); 
console.log("Difference: " + difference); 
console.log("Product: " + product); 
console.log("Quotient: " + quotient);

// 3. Write a program that converts Celsius to Fahrenheit.
let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius + "°C is " + fahrenheit + "°F"); // Output: 25°C is 77°F

// 4. Create a program that calculates the area of a rectangle using variables for length and width.
let length = 5;
let width = 10;
let area = length * width;
console.log("Area: " + area);

// 5. Write code that checks if a number is even or odd and displays the result.
let number = 7;
if (number % 2 === 0) {
    console.log(number + " is even.");
}
else {
    console.log(number + " is odd.");
}



// 6. Create a program that determines if a year entered is a leap year.
let year = 2020;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}

// 7. Write a function that returns the reverse of a string input.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello")); // Output: "olleH"


// 8. Create a function that counts the number of vowels in a string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3 (e, o, o)

// 9. Write a program that finds the largest number in an array of 5 numbers.
let numbers = [3, 1, 4, 1, 5];
let largest = Math.max(...numbers);
console.log("Largest number: " + largest);

// 10. Create a function that checks if a string is a palindrome.
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
    
// 11. Write code that calculates the factorial of a number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 12. Create a function that generates a random number between two given values.
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomBetween(1, 10));

// 13. Write a program that converts a number of seconds into hours, minutes, and seconds.
function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return { hours, minutes, seconds };
}
console.log(convertSeconds(3665)); // Output: { hours: 1, minutes: 1, seconds: 5 }

// 14. Create a program that checks if a number is prime.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));    // Output: true
console.log(isPrime(10));   // Output: false

// 15. Write a function that capitalizes the first letter of each word in a sentence.
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetter("hello world"));
// Output: "Hello World"

// 16. Create a program that calculates the sum of all numbers from 1 to n.
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumToN(10)); // Output: 55 (1 + 2 + ... + 10)

    
// 17. Write code that finds the average of numbers in an array.
function averageArray(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}
console.log(averageArray([1, 2, 3, 4, 5]));


// 18. Create a function that removes duplicate values from an array.
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 19. Write a program that counts down from 10 to 1, then displays "Blast off!".
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Blast off!");

// 20. Create a function that determines if a string contains only numbers.
function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}
console.log(containsOnlyNumbers("12345"));
console.log(containsOnlyNumbers("123a5"));

// 21. Write code that finds the second smallest number in an array.
let array= [1,2,3,4,5,6,7]
let secondSmallest = Math.min(...array.filter(num => num !== Math.min(...array)));
console.log("Second smallest number: " + secondSmallest);

// 22. Create a program that displays the multiplication table for a given number.
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
multiplicationTable(5);

// 23. Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number).
function validatePassword(password) {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= 8 && hasUppercase && hasLowercase && hasNumber;
}



// 24. Create code that simulates a simple calculator with basic operations.
function calculator(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
        default:
            return "Invalid operation";
    }
}
console.log(calculator(10, 5, 'add')); // Output: 15

// 25. Write a program that finds all factors of a given number.
function findFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}
console.log(findFactors(12)); // Output: [1, 2, 3, 4, 6, 12]


// 26. Create a function that checks if two strings are anagrams.

function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false

// 27. Write a program that generates the Fibonacci sequence up to n terms.
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(areAnagrams("listen", "silent")); // Output: true

// 28. Create code that sorts an array of numbers without using the built-in sort method.
function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(sortArray([5, 3, 8, 1, 2])); // Output: [1, 2, 3, 5, 8]

// 29. Write a function that counts how many times a specific element appears in an array.
function countOccurrences(arr, element) {
    return arr.filter(item => item === element).length;
}
console.log(countOccurrences([1, 2, 3, 1, 4, 1], 1)); // Output: 3

// 30. Create a shopping cart program where users can add items, remove items, and calculate the total price.
   let cart = [];
let totalPrice = 0;
function addItem(item, price) {
    cart.push({ item, price });
    totalPrice += price;
}
function removeItem(item) {
    const index = cart.findIndex(cartItem => cartItem.item === item);
    if (index !== -1) {
        totalPrice -= cart[index].price;
        cart.splice(index, 1);
    }
}
function calculateTotal() {
    return totalPrice;
}
addItem("Apple", 1.5);
addItem("Banana", 2.0);
removeItem("Apple");
console.log("Total Price: $" + calculateTotal()); 
// Output: Total Price: $2.0
