function agregateElement (array) {

let sumElements = 0;
let sumInverseValues = 0;
let concatValues = "";

for(let i = 0; i < array.length; i++){

    let currentNum = Number (array[i]);

    sumElements += currentNum;
    sumInverseValues += 1/currentNum;
    concatValues = concatValues + currentNum;
}

console.log(sumElements);
console.log(sumInverseValues);
console.log(concatValues);


}

agregateElement([1, 2, 3]);