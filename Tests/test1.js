const { expect } = require('chai');
const companyAdministration = require("./solution1");


describe('Test', () => {


    describe('hiringEmployee tests', () => {


        it('happy path', () => {

            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 22)).to.equal('Pesho was successfully hired for the position Programmer.')
            expect(companyAdministration.hiringEmployee('Gosho', 'Programmer', 3)).to.equal('Gosho was successfully hired for the position Programmer.')



        });

        it('Inapropriate input', () => {

            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 1)).to.equal('Pesho is not approved for this position.')
            expect(() => companyAdministration.hiringEmployee('Pesho', 'HR', 5)).to.throw('We are not looking for workers for this position.')




        });




    });

    describe('calculateSalary tests', () => {


        it('happy path', () => {

            expect(companyAdministration.calculateSalary(10)).to.equal(150)
            expect(companyAdministration.calculateSalary(200)).to.equal(4000)
            expect(companyAdministration.calculateSalary(0)).to.equal(0)
            expect(companyAdministration.calculateSalary(160)).to.equal(2400)



        });

        it('Inapropriate input', () => {

            expect(() => companyAdministration.calculateSalary('200')).to.throw('Invalid hours')
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours')


        });


    });

    describe('firedEmployee tests', () => {


        it('happy path', () => {

            expect(companyAdministration.firedEmployee(['Pesho', 'Gosho'], 0)).to.equal('Gosho')
            expect(companyAdministration.firedEmployee(['Pesho', 'Gosho'], 1)).to.equal('Pesho')
            expect(companyAdministration.firedEmployee(['Pesho', 'Gosho', 'Stoyan'], 1)).to.equal('Pesho, Stoyan')




        });

        it('Inapropriate input', () => {

            expect(() => companyAdministration.firedEmployee('Pesho', 0)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee([], 0)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Pesho'], 1)).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Pesho'], 'a')).to.throw('Invalid input')
            expect(() => companyAdministration.firedEmployee(['Pesho'], -1)).to.throw('Invalid input')


        });


    });
});
