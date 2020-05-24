const path = require('path')
const express = require('express')
const forecast = require('./utils/forecast')

const app = express()

app.set('port' , process.env.PORT || 3000)

app.use(express.static(path.join(__dirname , '/public'))); 

app.set('view engine' , 'hbs')

app.get('/weather', (req,res) => {
    
    if(!req.query.location) {
        return res.render('index', { error : 'Please provide address...!'})
    }

    forecast(req.query.location, (error , body = {}) => {
        if(error) {
            return res.send({error})
        }
        res.send({ main : body.weather[0].main ,
            lat : body.coord.lat ,
            lon : body.coord.lon ,
            temp : body.main.temp,
            wind : body.wind.speed,
            windDegree : body.wind.deg,
            location: body.name,
            country : body.sys.country,
            pressure : body.main.pressure
        })
    })
})

app.get('/*' , (req , res) => {
    res.render('index')
})

app.listen(PORT , () => {
    console.log('Server started......!')
})