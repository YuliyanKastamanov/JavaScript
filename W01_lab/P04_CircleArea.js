function circleArea(number) {

    let type = typeof (number);
    let result;

    if (type === 'number') {
        result = number * number * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }

}

circleArea(5);
circleArea('name')