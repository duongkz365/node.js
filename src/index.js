const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
app.use(morgan('combined'))
 //Templelate engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
app.get('/trangchu', function (req, res) 
{
  res.render('home');
});

 
app.listen(3000);