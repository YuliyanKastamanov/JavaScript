class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;

    }


    addCar(model, horsepower, price, mileage) {

        if (model == '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        let newCar = { model, horsepower, price, mileage };

        this.availableCars.push(newCar);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {

        let isFound = false;

        let currentModel;
        let currentHorsepower;
        let currentMileage;
        let soldPrice;
        let currentCarPrice;
        let difference;



        for (const car of this.availableCars) {

            if (car.model === model) {
                isFound = true;
                currentModel = model;
                currentHorsepower = car.horsepower;
                currentMileage = car.mileage;
                currentCarPrice = car.price;
                this.availableCars.pop(car)
                difference = currentMileage - desiredMileage;

                if (difference <= 0) {
                    soldPrice = currentCarPrice;
                } else if (difference <= 40000) {
                    soldPrice = currentCarPrice * 0.95
                } else {
                    soldPrice = currentCarPrice * 0.9;
                   
                }




            }


        }



        this.soldCars.push({currentModel, currentHorsepower, soldPrice})


        if (!isFound) {
            throw new Error(`${model} was not found!`)
        }


        

        



        this.totalIncome += soldPrice;

        return `${currentModel} was sold for ${soldPrice.toFixed(2)}$`







    }

    currentCar() {
        let carsArr = [];
        carsArr.push('-Available cars:')

        if (this.availableCars.length <= 0) {
            return 'There are no available cars';
        } else {

            for (const car of this.availableCars) {

                carsArr.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)

            }
        }

        return carsArr.join('\n');
    }


    salesReport(criteria) {

        let result = [];



        if (criteria == 'horsepower') {

            this.soldCars.sort((a, b) => b.currentHorsepower - a.currentHorsepower);
        } else if (criteria == 'model') {

            this.soldCars.sort((a, b) => a.currentModel.localeCompare(b.currentModel));
        } else {
            throw new Error("Invalid criteria!")
        }

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
        result.push(`-${this.soldCars.length} cars sold:`)



        for (const car of this.soldCars) {

            result.push(`---${car.currentModel} - ${car.currentHorsepower} HP - ${car.soldPrice.toFixed(2)}$`)

        }

        return result.join('\n')

    }


}
let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('model'));
