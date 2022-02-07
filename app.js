require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;


//habdlebars 
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/parciales');



//middleware para servir contenido estátitco

app.use(express.static('public'));

app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'hector',
        titulo: 'cursodemode'
    });
})


app.get('/generic', function (req, res) {

    res.render('generic');

})

app.get('/elements', function (req, res) {

    res.render('elements')

})

app.get('*', function (req, res) {

    res.sendFile(__dirname + '/public/404.html')

})
app.listen(port, () =>{
    console.log(`Escuchando en http://localhost:${port}`);
})
