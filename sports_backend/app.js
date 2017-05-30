const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', function(request, response) {
  response.render('index');
})

app.listen(4000, function() {
  console.log('Listening on port 4000');
})
