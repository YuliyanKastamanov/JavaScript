const { expect } = require('chai');
const movieTheater = require("./solution04");

describe('Test', () => {


    describe('ageRestrictions tests', () => {


        it('happy path', () => {

            //example
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie')
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers')
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian')
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie')
            expect(movieTheater.ageRestrictions('dsfs')).to.equal('There are no age restrictions for this movie')
            expect(movieTheater.ageRestrictions(1)).to.equal('There are no age restrictions for this movie')

            


           


        });


            //example
            //expect(() => rentCar.searchCar('', "")).to.throw('Invalid input!');
            //expect(() => rentCar.searchCar('', 1)).to.throw('Invalid input!');
            //expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"],'Skoda')).to.throw('There are no such models in the catalog!')
            //expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], 1)).to.throw('Invalid input!')




        




    });

    describe('moneySpent tests', () => {


        it('happy path', () => {

            expect(movieTheater.moneySpent(1, ['Nachos'], ['Soda'] )).to.equal('The total cost for the purchase is 23.50')
            expect(movieTheater.moneySpent(3, ['Nachos'], ['Soda'] )).to.equal('The total cost for the purchase with applied discount is 42.80')

          



        });

        it('Inapropriate input', () => {


            expect(() => movieTheater.moneySpent('a', 1, 2)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, ['Nachos'], 2)).to.throw('Invalid input');
            expect(() => movieTheater.moneySpent(1, 1, ['Soda'])).to.throw('Invalid input');





        });


    });

    describe('reservation tests', () => {


        it('happy path', () => {

           
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],3)).to.equal(2)
            expect(movieTheater.reservation([{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }],7)).to.equal(1)





        });

        it('Inapropriate input', () => {

            expect(() => movieTheater.reservation('a', 'a')).to.throw('Invalid input');
            expect(() => movieTheater.reservation('[{ rowNumber: 1, freeSeats: 7 }, { rowNumber: 2, freeSeats: 5 }]',0)).to.throw('Invalid input');


            


        });


    });
});
