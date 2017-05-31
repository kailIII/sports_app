const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const Team = require('./models').Team
const Player = require('./models').Player
const User = require('./models').User

var cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000'
}
app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

app.get('/players', function (request, response) {
  Player.findAll().then(function(players){
    response.status(200)
    response.json({message: "success", players: players})

  })
  // response.json({message: 'API Example App'})
});


// ???
// app.get('/team:id', function (request, response) {
//   Player.findAll().then(function(players){
//     // put in where statement to return only form certain team
//     response.status(200)
//     response.json({message: "success", players: players})
//
//   })
//   // response.json({message: 'API Example App'})
// });

app.post('/create-player', function(request, response){
  Player.create(request.body.player).then(function(player){
    response.status(200)
    response.json({message: "success", player: player})
  }).catch(function(error){
    console.log('fail');
    response.status(400)
    response.json({message: "fail", error: error})
  })
})

app.post('/create-user', function(request, response){
  User.create(request.body.user).then(function(user){
    response.status(200)
    response.json({message: "success", user: user})
  }).catch(function(error){
    console.log('fail');
    response.status(400)
    response.json({message: "fail", error: error})
  })
})


app.listen(process.env.PORT || 4000, function () {
 console.log('Todo Server listening on port 4000!');
});



// const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
//
// const bodyParser = require('body-parser');
// const app = express();
//
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');
// app.use(expressLayouts);
//
// app.get('/', function(request, response) {
//   response.render('index');
// })
//
// app.listen(4000, function() {
//   console.log('Listening on port 4000');
// })
