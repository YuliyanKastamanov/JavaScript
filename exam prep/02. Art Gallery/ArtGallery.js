class ArtGallery {


    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {'picture': 200, 'photo': 50, 'item': 250 }

        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel.toLowerCase();

        let isInTheArr = false;

        if (!this.possibleArticles[articleModel]) {

            throw new Error('This article model is not included in this gallery!');
        }




        for (const el of this.listOfArticles) {

            if (el.articleName === articleName && el.articleModel === articleModel) {

                el.quantity += Number(quantity)
                isInTheArr = true;
            }
        }

        if (!isInTheArr) {

            this.listOfArticles.push({ articleModel, articleName, quantity});
            console.log(this.listOfArticles.push({ articleModel, articleName, quantity}))
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`


    }


    inviteGuest(guestName, personality) {


        for (const guest of this.guests) {
            if (guest.guestName === guest) {

                throw new Error(`${guestName} has already been invited.`);
            }
        }
        let newGuest = {

            guestName,
            currentPoints: 0, 
            purchaseArticle: 0

        }
        

        switch(personality){
            case 'Vip': newGuest.points = 500; break;
            case 'Middle': newGuest.points = 250; break;
            default: newGuest.points = 50; break;
        }


      

        this.guests.push(newGuest);

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName) {

        let currentArticle;
        let currentGuest;

        let isArticleInTheArr = false;


        let articlePointsNeeded = 0;

        for (const el of this.listOfArticles) {
            if (el.articleName !== articleName || el.articleModel !== articleModel) {

                isArticleInTheArr = false;


            } else {
                currentArticle = el;
                isArticleInTheArr = true;
                break;
            }





        }

        if (!isArticleInTheArr) {

            throw new Error('This article is not found.')
        }

        if (currentArticle.quantity === 0) {

            return `The ${articleName} is not available.`
        }


        let isGuestInTheArr = false;



        for (const el of this.guests) {

            if (el.guestName !== guestName) {
                isGuestInTheArr = false
            } else{
                isGuestInTheArr = true;
                currentGuest = el;
                break;

            }



        }

        if (!isGuestInTheArr) {
            return 'This guest is not invited.'
        }

        if (currentGuest.points < this.possibleArticles[articleModel]) {

            return 'You need to more points to purchase the article.'
        } else {

            currentArticle.quantity--;
            currentGuest.points -= this.possibleArticles[articleModel];
            currentGuest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`



    }

    showGalleryInfo (criteria){

        let result = [];
        

        if (criteria === 'article'){
            result.push('Articles information:')
            for (const article of this.listOfArticles) {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            }
        }else if(criteria === 'guest'){

            result.push('Guests information:')

            for (const guest of this.guests) {

                result.push(`${guest.guestName} - ${guest.purchaseArticle}`)
                
            }
        }

        return result.join('\n');
    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));


