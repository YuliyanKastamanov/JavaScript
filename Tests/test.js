const { expect } = require('chai');
const  bookSelection = require("./solution");


describe('Test', () => {

    describe ('isGenreSuitable function test', () => {

        it ('happy path', () => {

            expect(bookSelection.isGenreSuitable()).to.equal('Those books are suitable')
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 20)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 10)).to.equal('Those books are suitable');

        }); 

        it ('Inapropriate input', () => {

            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.equal('Books with Horror genre are not suitable for kids at 10 age');

        }); 
        

    });

    describe ('isItAffordable function test', () => {

        it ('happy path', () => {

            
            expect(bookSelection.isItAffordable(30, 20)).to.equal(`You don't have enough money`);
            expect(bookSelection.isItAffordable(20, 30)).to.equal('Book bought. You have 10$ left');
            expect(bookSelection.isItAffordable(30, 30)).to.equal('Book bought. You have 0$ left');


        }); 

        it ('Inapropriate input', () => {
            expect(() => bookSelection.isItAffordable('aaa', 'bbb')).to.throw('Invalid input')
            
        }); 

    });

    describe ('suitableTitles function test', () => {

        it ('happy path', () => {

            expect(bookSelection.suitableTitles([{
                title: 'aa',
                genre: 'a'
            }], 'a')).to.deep.equal(['aa'])
            

        }); 

        it ('Inapropriate input', () => {

            expect(() => bookSelection.suitableTitles('a', 10)).to.throw('Invalid input')
            expect(() => bookSelection.suitableTitles('a', 'b')).to.throw('Invalid input')

            
        }); 

    });


    


});