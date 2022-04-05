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
            return false;
        }
    }
    return true;
}   
let word1 = "довод";
let word2 = "кружка";
console.log(word1 + ' = ' + isPalindrome(word1));
console.log(word2 + ' = ' + isPalindrome(word2));

// Task3
function matrixAddition(matrix1, matrix2){
    let matrixSum = [[],[]];
    if(matrix1.length == matrix2.length){ 
        for (let i = 0; i < matrix1.length; i++){
            for (let j = 0; j < matrix1.length; j++){
                matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
            }   
        }
        for (let i = 0; i < matrixSum.length; i++){
            for (let j = 0; j < matrixSum.length; j++){
                console.log(matrixSum[i][j] + "\t" + matrixSum[i][j+1]);
                break;
            }   
        }

    }else{
        return "Операция невыполнима";
    }

}
console.log(matrixAddition([[9,2],], [[9,8],[3,6]]));
console.log(matrixAddition([[9,2],[3,5]], [[9,8],[3,6]]));

//Task4

let student = {
    group: "201-323",
    last_name: "Зарубин",
    first_name: "Александр"
};
console.log(`Список свойств: ${Object.keys(student)}`);
console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`);

//Task5

let possition = 0;
let ItemWidth = 300;
let ItemsShowed = 3;
let ItemsForScroll = 2;
let AmountOfItems = 10;
const sliderline = document.querySelector('.slider_pictures');
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');

document.querySelector('.btn_next').addEventListener('click',function(){
    possition -= ItemWidth*ItemsForScroll;

    if(possition <= -(((Math.floor(AmountOfItems/ItemsShowed))*ItemsForScroll)*ItemWidth)){
        possition = -(AmountOfItems-ItemsShowed)*ItemWidth;
    }

    sliderline.style.left = possition + "px";
    checkButtons();
});
document.querySelector('.btn_prev').addEventListener('click',function(){
    if(possition == -1*ItemWidth){
        possition = 0;
    }
    else{
        possition += ItemWidth*ItemsForScroll;
    }
    sliderline.style.left = possition + "px";
    checkButtons();
});

const checkButtons = () =>{
    btnPrev.disabled = possition == 0;
    btnNext.disabled = possition == -(AmountOfItems-ItemsShowed)*ItemWidth;

}
checkButtons();
