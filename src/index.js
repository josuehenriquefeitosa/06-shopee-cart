import createItem from "./services/item.js";
import * as cartService from './services/cart.js'


const myCart = [];
const myWhishList = [];

//criando 2 itens
const item1 = await createItem('hotwells ferrari',20.99,1);
const item2 = await createItem('hotwells lamburguini',39.99,3);

console.log(`*********************************
    Welcome to the shoppe cart
*********************************\n`
)
// add itens no carrinho
await cartService.addItem(myCart,item1)
await cartService.addItem(myCart,item2)

await cartService.removeItem(myCart,item1)
await cartService.removeItem(myCart,item2)
//await cartService.removeItem(myCart,item2)


await cartService.displayCart(myCart)

//deletando itens no carrinho
// await cartService.deleteItem(myCart,item2.name)
// await cartService.deleteItem(myCart,item1.name)

console.log('Shoppe cart is:')
await cartService.calculateTotal(myCart)



