// quais ações meu carrinho pode fazer

//-casos de uso
//-add item✅
async function addItem(userCart, item) {
    userCart.push(item)
}

// -calcular total✅
async function calculateTotal(userCart) {
    const result = userCart.reduce((total,item) => total + item.subtotal(),0)
    console.log(`=========================
     💰 Total: ${result}
=========================`)
}


//-deletar item no carrinho
async function deleteItem(userCart,name) {
    const index = userCart.findIndex((item)=> item.name === name)
    if (index !== -1){
        userCart.splice(index,1)
    }
}


//-remover um item(diminui 1 item)
async function removeItem(userCart, item) {
    //const deleteIndex = item - 1;

    const indexFound = userCart.findIndex((p)=> p.name === item.name)
    console.log(`============
        ${indexFound}
    ============`)

    if (indexFound == -1){
        console.log("Item não encontrado")
        return
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1
        return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1)
        return
    }

}


async function displayCart(userCart) {
    console.log('shopee cart list:')
    console.log('------------------------------')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price}|
        ${item.quantity}x | R$ ${item.subtotal()}\n`)
    })
    console.log('------------------------------')
}

export {removeItem, calculateTotal, deleteItem, addItem, displayCart}