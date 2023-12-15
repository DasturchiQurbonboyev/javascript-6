// Array 1

// function getLevel2(n){
// let res =[]
// for (let i=1; i<= n; i++){
//     res.push(2**i);
// }
// return res;
// }

// let arr = getLevel2(5)
// console.log(arr);




// Array 2




// function generateSequence(n, A, B) {
    
//     let result = [A, B];
    

//   for (let i = 2; i < n; i++) {
  
//      result.push(result.reduce((a, b) => a + b, 0));
//   }
//   return result;
// }

// let  output = generateSequence(5, 2, 3);

// console.log(output);





// Array 3





    // let arr = [4, 7, 2, 9, 1];
        
    // let arrReversed = arr.toReversed()
    
    // console.log(arr);
    // console.log(arrReversed);

    
// }




// Array 4





// function findOdds(arr) {
//   let  odds = arr.filter(element => element % 2 !== 0);

//   let  oddsCount = odds.length;

//   console.log("Massiv elementlar: " + arr);
//   console.log("Natija: " + odds + " toqlar soni = " + oddsCount);
// }

// let  elements = [4, 5, 7, 8, 6, 9];

// findOdds(elements);





// Array 5




// function findOdds(arr) {
//   let  odds = arr.filter(element => element % 2 !== 0);
//   let couple = arr.filter(element => element % 2 == 0);

//   console.log("Massiv elementlar: " + arr);
//   console.log("Juftlari: " + couple + " Toqlari: " + odds.toReversed() );
// }

// let  elements = [4, 5, 7, 8, 6, 9];

// findOdds(elements);





// Array 6





// function array(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
//   }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);





// Array 7





// function array(arr) {
//   for (let i = arr.length-2; i >= 1; i -= 2) {
//     console.log(arr[i]);
//   }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);






// Array 8





// function array (arr) {
//     for (let i=0; i<=arr.length ; i+=2){
//         console.log(arr[i]);
//     }
//      for (let i=1; i<arr.length ; i+=2){
//         console.log(arr[i]);
//     }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);





// Array 9





// function array (arr) {
//     for (let i=1; i<arr.length ; i+=2){
//         console.log(arr[i]);
//     }
//      for (let i=arr.length-1; i>=0 ; i-=2){
        
//         console.log(arr[i]);
//     }
// }

// let myArray = [1, 4, 2, 8, 5, 6, 7];

// array(myArray);




// Array 10





// function printCustomPattern(arr) {
//   let n = arr.length;

//   for (let i = 0; i < n  ; i +=3) {
//     console.log(arr[i]);
//     console.log(arr[i+1]);
//     console.log(arr[n - 1 - i]);
//     console.log(arr[n - 2 - i]);
//   }
  
// }

// var myArray = [1, 4, 2, 8, 5, 6, 9];

// printCustomPattern(myArray);





// Array 11






// let K =1;
// let L =4;
// let Sum =0

// function rangeOutSum(arr){
//     N = arr.length-1; 
//     if (0 <= K && K <= L && L< N){
//         for ( let i = 0; i<=arr.length-1; i++){
//             Sum += arr[i]
//         }
//         console.log(Sum - arr[K]-arr[L]);
//     }
// }


// rangeOutSum(myarray=[1, 2, 3, 4, 5, 6, 7, 8, 9])






// Array 12






// function separateTruthyFalsy(arr){
//     let truthyArray = [];
//     let falsyArray = [];

//     for (let i = 0; i< arr.length; i++){
//         arr[i] || falsyArray.push(arr[i]);
//         arr[i] && truthyArray.push(arr[i]);
//     }

//     console.log('Truthy:', truthyArray);
//     console.log('Falsy:', falsyArray);

// }


// let inputArray = [10, false, "", "Abdulaziz", null];

// separateTruthyFalsy(inputArray);








// Array 13








// function getOddMin(arr){
//     let min = arr[0];

//     for (let i = 0; i<arr.length; i +=2){
//          if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// let inputArray = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// let min = getOddMin(inputArray)

// console.log(min);


// Array 14

// function getOddMin(arr){
//     let max = arr[0];

//     for (let i = 1; i<arr.length; i +=2){
//          if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// let inputArray = [100, 2, 3, 4, 5, 6, 7, 8, 9, 10000, 11]

// let max = getOddMin(inputArray)

// console.log(max);










// Array 15







// function getOddMin(arr){
//     let max = arr[0];

//     for (let i = 1; i<arr.length-1; i ++){
//          if (arr[i] > max) {
//             max = arr[i];
//             console.log("Lokal maksimum elementi indeksi: " + i);
//         }
//     }
// }

// let inputArray = [100, 2, 3, 4, 500000, 6, 7, 8, 9, 10000, 11]

// let max = getOddMin(inputArray)








// Array 16








/*// function getOddMin(arr){
//     let max = arr[0];
//     let R = 500;   
//     let min=[] 
    
//     for (let i = 0; i<arr.length; i ++){
//         min.push(Math.abs(R-arr[i]));
//     }
//         // console.log(min);
        
//         let minnn= min[0];

//         for (let el of min){
//             if (el<minnn){
//                 el = minnn
//             }
//         }console.log(minnn);
    
//     }
    
//     let inputArray = [10000, 100, 3, 4, 5, 6, 7, 8, 9, 10000, 11]
    
//     let max = getOddMin(inputArray)*/

// function findClosestToR(arr, R) {
//     if (arr.length === 0) {
//         return undefined; 
//     }

//     let closest = arr[0]; 
//     let minDifference = Math.abs(R - arr[0]); 

//     for (let i = 1; i < arr.length; i++) {
//         let currentDifference = Math.abs(R - arr[i]);

//         if (currentDifference < minDifference) {
//             minDifference = currentDifference;
//             closest = arr[i];
//         }
//     }

//     return closest;
// }

// let inputArray = [3, 7, 1, 2, 6, 9, 3];
// let R = 5;

// let closestElement = findClosestToR(inputArray, R);

// if (closestElement !== undefined) {
//     console.log(`Massiv elementlari orasidan ${R} ga eng yaqin son: ${closestElement}`);
// } else {
//     console.log('Massiv bo\'sh.');
// }




// Array 17


// function findMax2(arr) {


//     let max1 = arr[0] + arr[1]; 
//     let max2 = [arr[0], arr[1]]; 

//     for (let i = 1; i < arr.length - 1; i++) {
//         let currentSum = arr[i] + arr[i + 1];

//         if (currentSum > max1) {
//             max1 = currentSum;
//             max2 = [arr[i], arr[i + 1]];
//         }
//     }

//     return max2;
// }

// let inputArray = [3, 7, 1, 2, 6, 9, 3];

// let max2 = findMax2(inputArray);

// console.log(`Massivning elementlari orasidan yig'indisi eng katta bo'lgan 2 ta qo'shni: ` + max2);






// Array 18


// function array(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 console.log(i, j);
//             }
//         }
//     }

// }

// let inputArray = [3, 7, 1, 2, 6, 9, 3, 2, 8, 5, 6, 9];

// let duplicateIndices = array(inputArray);





// Array 19





// function findMostFrequentValue(arr) {
//     let frequencyMap = {};
//     let mostFrequentValue;
//     let maxFrequency = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let currentValue = arr[i];
//         frequencyMap[currentValue] = (frequencyMap[currentValue] || 0) + 1;

//         if (frequencyMap[currentValue] > maxFrequency) {
//             mostFrequentValue = currentValue;
//             maxFrequency = frequencyMap[currentValue];
//         }
//     }

//     if (maxFrequency > 1) {
//         return {
//             value: mostFrequentValue,
//             frequency: maxFrequency
//         };
//     } else {
//         return "Massivda eng ko'p qatnashgan bir xil qiymatli element topilmadi.";
//     }
// }

// let inputArray = [3, 7, 1, 2, 6, 9, 3, 2, 8, 5, 6, 9, 3, 2, 3, 3];

// let result = findMostFrequentValue(inputArray);

// console.log(result);







// Array 20




// function createEvenArray(a) {
//     let b = [];
    
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) {
//             b.push(a[i]);
//         }
//     }

//     return b;
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let b = createEvenArray(a);

// console.log(`Juft elementlar soni: `+ b.length);
// console.log(`Juft elementlar: ` +b );






// Array 21


// function createEvenArray(a) {
//     let b = [];
//     let k = 2;
    
//     for (let i = 0; i < a.length; i++) {
//             b.push(a[i]*k);
//     }

//     return b;
// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let b = createEvenArray(a);

// console.log(`k ga orttirilgan massiv elementlari: ` +b );




// Array 22








// function createEvenArray(a) {
//     let b = [];
    
//     for (let i = a.length/2; i < a.length; i++) {
//         b.push(a[i]);
//     }

//     for (let i = 0; i < a.length/2; i++) {
//             b.push(a[i]);
//     }
    
    

//     return b;

// }

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let b = createEvenArray(a);

// console.log(b );





// Array 23





// function teskariTartib(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n / 2; i++) {
//         let temp = arr[i];
//         arr[i] = arr[n - 1 - i];
//         arr[n - 1 - i] = temp;
//     }
// }

// let massiv = [1, 2, 3, 4, 5];
// console.log("Boshlang'ich massiv:", massiv);

// teskariTartib(massiv);

// console.log("Teskari tartibda joylashtirilgan massiv:", massiv);





// Array 24




// function minMaxOzgarishsiz(arr) {
//     let minIndex = 0;
//     let maxIndex = 0;
//     let n = arr.length;

//     for (let i = 1; i < n; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i;
//         } else if (arr[i] > arr[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     let temp = arr[minIndex];
//     arr[minIndex] = arr[maxIndex];
//     arr[maxIndex] = temp;
// }

// let massiv = [3, 1, 4, 2, 5];
// console.log("Boshlang'ich massiv:", massiv);

// minMaxOzgarishsiz(massiv);

// console.log("Eng kichik va eng katta elementlar o'zgarishsiz qoldirilgan massiv:", massiv);






// Array 25




// function chapgaSiklikSiljituvchi(arr) {
//     let  n = arr.length;

//     let  lastElement = arr[n - 1];

//     for (let  i = n - 1; i > 0; i--) {
//         arr[i] = arr[i - 1];
//     }

//     arr[0] = lastElement;
// }

// let  massiv = [1, 2, 3, 4, 5];
// console.log("Boshlang'ich massiv:", massiv);

// chapgaSiklikSiljituvchi(massiv);

// console.log("Massivning chapga siklik siljitilgan holda joylashtirilgan natija:", massiv);







// Array 26



// function deleteElementWithIndex(arr, k) {
//     var n = arr.length;

//     if (k < 0 || k >= n) {
//         console.log("Xatolik: Noto'g'ri k qiymati");
//         return arr;
//     }

//     arr.splice(k, 1);

//     return arr;
// }

// var massiv = [1, 2, 3, 4, 5];
// var k = 2; 
// console.log("Boshlang'ich massiv:", massiv);

// var natija = deleteElementWithIndex(massiv, k);

// console.log(`Indeksi` + k  `ga teng bo'lgan element o'chirilgan natija:`, natija);






// Array 27






// function deleteElementsBetweenIndices(arr, k, m) {
//     let n = arr.length;

//     if (k <= 0 || m <= k || m >= n) {
//         console.log("Xatolik: Noto'g'ri k yoki m qiymatlari");
//         return arr;
//     }

//     arr.splice(k, m - k );

//     return arr;
// }

// let massiv = [1, 2, 3, 4, 5, 6, 7, 8];
// let k = 2; 
// let m = 5; 
// console.log("Boshlang'ich massiv:", massiv);

// let natija = deleteElementsBetweenIndices(massiv, k, m);

// console.log(`Indeksi` + k + ` dan ` + m + ` gacha bo'lgan elementlar o'chirilgan natija:`, natija);





// Array 28





// function ochirishQoshni(arr) {
//     let n = arr.length;
//     let birinchiQoshni = arr[0];
//     let qoshniQiymati = birinchiQoshni % 10; 

    
//     for (let i = 1; i < n; i++) {
//         if (arr[i] % 10 === qoshniQiymati) {
//             arr.splice(i, 1);
//             break; 
//         }
//     }

//     return arr;
// }

// let massiv = [23, 56, 89, 45, 15, 45];
// console.log("Boshlang'ich massiv:", massiv);

// let natija = ochirishQoshni(massiv);

// console.log("Massivdan bir xil qo'shni o'chirilgan natija:", natija);





// Array 29




function getElementsOneTime(arr) {
    var frequencyMap = {};
    var result = [];

    // Massivni elementlari bo'yicha sanash
    for (var i = 0; i < arr.length; i++) {
        var currentElement = arr[i];

        // Sanash kartasiga elementni qo'shish
        if (frequencyMap[currentElement] === undefined) {
            frequencyMap[currentElement] = 1;
        } else {
            frequencyMap[currentElement]++;
        }
    }

    // Faqat bir marta ishtirok etgan elementlarni tanlash
    for (var key in frequencyMap) {
        if (frequencyMap.hasOwnProperty(key) && frequencyMap[key] === 1) {
            result.push(parseInt(key));
        }
    }

    return result;
}

// Test qilish uchun
var massiv = [1, 5, 6, 1, 5, 7, 2];
console.log("Boshlang'ich massiv:", massiv);

var natija = getElementsOneTime(massiv);

console.log("Faqat bir marta ishtirok etgan elementlardan iborat yangi massiv:", natija);
