const { expect } = require('chai');
const rentCar = require("./solution03");

describe('Test', () => {


    describe('searchCar tests', () => {


        it('happy path', () => {

            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Audi')).to.equal('There is 1 car of model Audi in the catalog!')

           


        });

        it('Inapropriate input', () => {

            expect(() => rentCar.searchCar('', "")).to.throw('Invalid input!');
            expect(() => rentCar.searchCar('', 1)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Skoda')).to.throw('There are no such models in the catalog!')
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1)).to.throw('Invalid input!')




        });




    });

    describe('calculatePriceOfCar tests', () => {


        it('happy path', () => {

          
            expect(rentCar.calculatePriceOfCar("Volkswagen", 1)).to.equal('You choose Volkswagen and it will cost $20!')
            expect(rentCar.calculatePriceOfCar("Audi", 1)).to.equal('You choose Audi and it will cost $36!')
            expect(rentCar.calculatePriceOfCar("Toyota", 1)).to.equal('You choose Toyota and it will cost $40!')
            expect(rentCar.calculatePriceOfCar("Toyota", 2)).to.equal('You choose Toyota and it will cost $80!')

            expect(rentCar.calculatePriceOfCar("BMW", 1)).to.equal('You choose BMW and it will cost $45!')
            expect(rentCar.calculatePriceOfCar("Mercedes", 1)).to.equal('You choose Mercedes and it will cost $50!')




        });

        it('Inapropriate input', () => {

            expect(() => rentCar.calculatePriceOfCar('', "")).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('', 1)).to.throw('No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('Skoda', 1)).to.throw('No such model in the catalog!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', "")).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', "")).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Volkswagen', 1.3)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('Skoda', 'a')).to.throw('Invalid input!');



        });


    });

    describe('checkBudget tests', () => {


        it('happy path', () => {

           

            expect(rentCar.checkBudget(1,2,3)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(0,2,3)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(2,0,3)).to.equal('You rent a car!')
            expect(rentCar.checkBudget(2,2,0)).to.equal('You need a bigger budget!')
            expect(rentCar.checkBudget(1,1,1)).to.equal('You rent a car!')
            




        });

        it('Inapropriate input', () => {

            expect(() => rentCar.checkBudget('a', 'a', 'a')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 'a', 3)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, 'a')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, 1.2)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1.2, 2, 3)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2.3, 3)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 2, 3.1)).to.throw('Invalid input!');
            



        });


    });
});
