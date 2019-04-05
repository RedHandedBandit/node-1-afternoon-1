const products = require('./../products.json')

let getProducts = (req, res) => {
    return res.status(200).send(products)
}

let getProductsById = (req, res) => {
    let {id} = req.params
    let singleProduct = products.filter(product => product.id === +id)[0]
    if(!singleProduct) {
        return res.status(500).send('didnt work idiot!')
    }
    return res.status(200).send(singleProduct)
}

let getProductsByPrice = (req, res) => {
    console.log('idiot')
    let {price} = req.query
    let productsOfPrice = products.filter(product => +product.price >= +price)
    if(!price) {
        return res.status(200).send(products)
    }
    return res.status(200).send(productsOfPrice)
}

module.exports = {
    getProducts,
    getProductsById,
    getProductsByPrice
}