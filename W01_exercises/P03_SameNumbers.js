function sameNumbers(number){

    let input = String(number);
    
    let isSame = true;
    let firstNum = Number(input[0]);
    let sum = firstNum;

    for(let i = 1; i < input.length; i++){
        
        let currentNum = Number(input[i]);
        sum += currentNum;
        if(firstNum != currentNum ){
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)
sameNumbers(1234)