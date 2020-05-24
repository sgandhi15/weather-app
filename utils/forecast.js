const request = require('request')

const forecast = (location , callback) => {
        const url = 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=42a6d6ee2703392f8fe35196caceeafa'

        request({ url , json : true} , (error , { body }) => {
            if (error) {
                callback('Problem with connecting web servers.....!' , undefined)
            } else if (body.message === 'city not found') {
                callback('Cannot find this location in records.....!' , undefined)
            } else {
                callback(undefined , body)
            }
        })
}

module.exports = forecast