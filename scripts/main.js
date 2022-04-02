// Task 1 
function absValue(a) {
    if (a<0){
        return a * -1;
    }
    if (a>=0){
        return a;
    }   
}
let number1 = -2;
let number2 = 4;
let number3 = 0;
console.log(number1 + ' = ' + absValue(number1));
console.log(number2 + ' = ' + absValue(number2));
console.log(number3 + ' = ' + absValue(number3));

//Task 2
function isPalindrome(a){   
    for(let j = 0 ; j <= a.length/2 ; j++){
        if (a[j] !== a[a.length-(j+1)]){ 
            return false
        }
    }
    return true
}   
let word1 = "довод";
let word2 = "кружка";
console.log(word1 + ' = ' + isPalindrome(word1));
console.log(word2 + ' = ' + isPalindrome(word2));
// Task3
