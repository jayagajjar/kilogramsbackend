const mongoose = require('mongoose')
mongoose
    .connect('mongodb://heroku_vvz3nlgr:qiepu79g2s6aqnjcig70rgn413@ds111063.mlab.com:11063/heroku_vvz3nlgr' , { useNewUrlParser: true ,useUnifiedTopology: true },)
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db