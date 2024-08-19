//CASOS DE USO 
//criar item c subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;