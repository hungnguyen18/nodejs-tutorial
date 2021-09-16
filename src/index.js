const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//http 
app.use(morgan('combined'))
// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources/views"));

app.get('/trangchu', (req, res) => {
  res.render('home');
});

app.get('/menu1', (req, res) => {
  res.render('menu1');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});