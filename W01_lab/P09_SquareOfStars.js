function squareOfStars(input) {


    let number = Number(input);
    for (let row = 0; row < number; row++) {
        let currentRow = '';
        for (let i = 0; i < number; i++) {

            currentRow += '* '

        }

        console.log(currentRow)
    }



}

squareOfStars(5)