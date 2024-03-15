const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById('result')
let temp;

function convert() {
        if(toFahrenheit.checked) {
        temp =  +textBox.value;
        temp = temp * 9 / 5 + 32;

        //textcontent is just like inner text
        //to fixed is to return a number we specify fter the decimal point...
        result.textContent  = temp.toFixed(4) + "°F";

    }else if (toCelsius.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) *  (5/9) ;
        result.textContent  = temp.toFixed(4) + "°C";
    }else{
        result.textContent = "Select a unit";
    }
}
        
//this means at position 2 ,insert lemon and kiwi and  dont remove anything

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
 console.log(fruits)   //at position 2, remove 2

//  const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.floor)

// console.log(newArr)


//multiply all numbers by ten
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}




