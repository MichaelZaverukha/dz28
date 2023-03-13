const products = [
   {
      name: 'milk',
      number:1,
      purchased: true,
      cost: 15,
      total:15,
   },
   {
      name: 'tomato',
      number:4,
      purchased: true,
      cost: 3,
      total:12,
   },
   {
      name: 'orange',
      number:3,
      purchased: false,
      cost: 5,
      total:15,
   },
   {
      name: 'water',
      number:1,
      purchased: false,
      cost: 2,
      total:2,
   },
   {
      name: 'bread',
      number:1,
      purchased: true,
      cost: 3,
      total:3,
   },
]

function printShoppinglist(){
   console.log('Список покупок');
   products.forEach(function(item){
      let status = item.purchased ? '[x]' : '[]';
      console.log(status + " " + item.name + " - " + item.number + " шт. - " + item.total + " грн."+ " - за штуку "+ item.cost+ " грн.");
   });
};

function sortShoppinglist(){
   products.sort(function(a, b){
      if (a.purchased===b.purchased) {
         return 0;
      }else if (a.purchased){
         return 1;
      }else{
         return -1;
      }
   });
}

let buy=prompt ('Що із запропонованого ви хочете придбати? (milk,tomato,orange,water,bread)');

let anonim=buy

function buyShoppinglist(anonim){
   products.forEach(function(item){
      if (item.name === anonim){
         item.purchased=true;
      }
   });
}

printShoppinglist(); // виводимо початковий список
buyShoppinglist(anonim); // відзначаємо хліб як придбаний
sortShoppinglist(); // сортуємо список за статусом придбання
printShoppinglist(); // виводимо відсортований список