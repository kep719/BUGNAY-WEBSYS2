const products = require('./products')

function getProduct(req, res){
    let result = products

    if(req.query.name){
        let searchQuery = req.query.name
        let lowerQuery = searchQuery.toLowerCase()
        result = result.filter(product => {
            const name = product.name.toLowerCase()
            return name.includes(lowerQuery)
        })
    }
    else if(req.query.description){
        let lowerQuery = req.query.description.toLowerCase()
        result = result.filter(product => {
            const description = product.description.toLowerCase()
            return description.includes(lowerQuery)
        })
    }
    else if(req.query.price){
        const [start, end] = req.query.price.split('-').map(Number)
        result = result.filter(product => product.price >= start && product.price <= end)
    }
    else if(req.query.stock){
        const [start, end] = req.query.stock.split('-').map(Number)
        result = result.filter(product => product.stock >= start && product.stock <= end)
    }

    res.send(result)
}

module.exports = {
    getProduct
}