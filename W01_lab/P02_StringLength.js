function stringLenght(first, second, third){

let sum = 0;
let array = [first, second, third];

for (let index = 0;  index < array.length; index++) {

    sum += array[index].length;
}
console.log(sum);
console.log(Math.round(sum/3));

}


stringLenght('chocolate', 'ice cream', 'cake');