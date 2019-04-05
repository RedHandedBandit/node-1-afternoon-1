const express = require('express')
const getProducts = require('./../controllers/getProducts')

const app = express()

app.get('/api/products', getProducts.getProducts)
app.get('/api/products/:id', getProducts.getProductsById)
app.get(`/api/product`, getProducts.getProductsByPrice)

const PORT = 4000
app.listen(PORT, () => console.log(`if you are quiet you can hear port ${PORT}`))