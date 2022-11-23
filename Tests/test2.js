const { expect } = require('chai');
const cinema = require("./solution02");

describe('Test', () => {


    describe('showMovies test', () => {

        it('happy path', () => {

            expect(cinema.showMovies(['Pesho 1', 'Gosho 1'])).to.equal('Pesho 1, Gosho 1')
            expect(cinema.showMovies([1, 2])).to.equal('1, 2')


        });

        it('Inapropriate input', () => {
            expect(() => cinema.showMovies([""]).to.equal('There are currently no movies to show.'))

        });

    });

    describe('ticketPrice test', () => {

        it('happy path', () => {

            expect(cinema.ticketPrice('Premiere')).to.equal(12.00)
            expect(cinema.ticketPrice('Normal')).to.equal(7.50)
            expect(cinema.ticketPrice('Discount')).to.equal(5.50)


        });

        it('Inapropriate input', () => {
            expect(() => cinema.ticketPrice('')).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice("gosho")).to.throw('Invalid projection type.');
            expect(() => cinema.ticketPrice(1)).to.throw('Invalid projection type.');



        });

    });

    describe('swapSeatsInHall test', () => {

        it('happy path', () => {

            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(19, 20)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(20, 19)).to.equal('Successful change of seats in the hall.')






        });

        it('Inapropriate input', () => {
            expect(cinema.swapSeatsInHall('a', 'b')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('1', '2')).to.equal('Unsuccessful change of seats in the hall.');
            expect( cinema.swapSeatsInHall('a', '')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('a', '1')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 'b')).to.equal('Unsuccessful change of seats in the hall.');
            expect( cinema.swapSeatsInHall('a', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', '')).to.equal('Unsuccessful change of seats in the hall.');
            expect( cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(22, 22)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, -2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1.1, 2.2)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 0)).to.equal('Unsuccessful change of seats in the hall.');


            

        });

    });



});

