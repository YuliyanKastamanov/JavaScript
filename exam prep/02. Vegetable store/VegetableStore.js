class VegetableStore{

    constructor(owner, location){
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];

    }

    loadingVegetables (vegetables){

        let typeArr = [];


        //минаваме през всеки ред въведени продукти
        for (const vegetable of vegetables) {
            //вземаме информацията за продукта.
            let [type, quantity, price] = vegetable.split(' ');
            
            //кастваме към Number количеството и цената
            quantity = Number(quantity);
            price = Number(price);

            //проверяваме дали имаме зеленчук от такъв тип. Ако нямаме product ще е undifined.
            let product = this.availableProducts.find(v => v.type == type);


            if (product == undefined){
            //ако продукта е undifined(нямаме го в масива от продукти) го добавяме като обект.

                this.availableProducts.push({type, quantity, price});
                typeArr.push(type);

            }else{
                //ако продукта го има в добавен увеличаваме количеството
                product.quantity += quantity;
                // ако новата цена, която са ни подали е по-голяма от цената на продукта, който имаме в масива, сетваме новата цена.
                if (price > product.price){
                    product.price = price
                }
            }


        }

        return `Successfully added ${typeArr.join(', ')}`


        
    }

    buyingVegetables (selectedProducts){

        let totalPrice = 0;

        for (const prod of selectedProducts) {
            let [type, quantity] = prod.split(' ');

            quantity = Number(quantity);

            //проверяваме дали имаме зеленчук от такъв тип. Ако нямаме product ще е undifined.
            let product = this.availableProducts.find(v => v.type == type);

            if (product == undefined){
                    //ако продукта е undifined(нямаме го в масива от продукти) хвърляме грешка.
                    throw new Error (`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                };

            if (quantity > product.quantity){

                //ако количеството е по-голямо от това с което разполагаме хвърляме грешка
                throw new Error (`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            // пресмятаме цената 
            let price = product.price * quantity;

            // изваждаме количеството, което сме продали от наличното
            product.quantity -= quantity;

            //добавяме цената към общата сума
            totalPrice += price;

            
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`


         

    }

    rottingVegetable (type, quantity){

        quantity = Number(quantity);
        //проверяваме дали имаме зеленчук от такъв тип. Ако нямаме product ще е undifined.
        let product = this.availableProducts.find(v => v.type == type);

        if (product == undefined){

            throw new Error (`${type} is not available in the store.`)
        }

        if (quantity > product.quantity){

            product.quantity = 0;

            return `The entire quantity of the ${type} has been removed.`
        }else{
            product.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }

    }

    revision (){


        let resArr = ['Available vegetables:'];

        this.availableProducts.sort((a, b) => a.price - b.price);
        this.availableProducts.forEach(element => resArr.push(`${element.type}-${element.quantity}-$${element.price}`));
        resArr.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return resArr.join('\n');
    
    }

}
