const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

const PORT = process.env.port || 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
