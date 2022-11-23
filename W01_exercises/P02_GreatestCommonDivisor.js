function greatestDivisor(num1, num2){

    while(num1 != num2){

        num1 > num2 ? num1 -= num2 : num2 -=num1;
    }
    console.log(num1)



}

greatestDivisor(2154, 458)