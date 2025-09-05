const customers = require('./customers')

function getCustomer(req,res){
    let result = customers

    if(req.query.id){
        result = result.filter((customer) => customer.id == req.query.id)
    }
    else if(req.query.gender){
        let firstLetter = req.query.gender ? req.query.gender.charAt(0).toUpperCase() : ''
        let othLetter = req.query.gender ? req.query.gender.slice(1).toLowerCase() : ''
        let comLetters = firstLetter + othLetter 
        result = result.filter((customer) => customer.gender == comLetters)
    }
    else if(req.query.age){
        let targetAge = Number(req.query.age)
        let currentDate = new Date()

        function calculateAge(birthdate){
            let birthday = new Date(birthdate)
            let customerAge = currentDate.getFullYear() - birthday.getFullYear()

            let monthDifference = currentDate.getMonth() - birthday.getMonth()
            if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthday.getDate())) {
                customerAge--
            }
            return customerAge
        }
        result = result.filter(customer => calculateAge(customer.birthday) === targetAge)
    }
    else if(req.query.start && req.query.end){
        const startDate = new Date(req.query.start)
        const endDate = new Date(req.query.end)

        result = result.filter(customer => {
            const createdAt = new Date(customer.createdAt)
            return createdAt >= startDate && createdAt <= endDate
        }) 
    }

    res.send(result)
}

module.exports = {
    getCustomer
}