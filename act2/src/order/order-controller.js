const orders = require('./orders')

function getOrders(req, res){
    let result = orders

    if(req.query.status){
        const status = req.query.status
        let firstLetter = status.charAt(0).toUpperCase()
        let othLetter = status.slice(1).toLowerCase()
        let comLetters = firstLetter + othLetter
        result = result.filter(order => order.status === comLetters)
    }
    else if(req.query.total){
        const [start, end] = req.query.total.split('-').map(Number)
        result = result.filter(order => order.totalAmount >= start && order.totalAmount <= end)
    }

    res.send(result)
}

module.exports = {
    getOrders
}