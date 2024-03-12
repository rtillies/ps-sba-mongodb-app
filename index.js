/* SETUP */
const express = require('express')
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Require routes from routes folder
const teamRoutes = require('./routes/teamRoutes')
const gameRoutes = require('./routes/gameRoutes')
const confRoutes = require('./routes/confRoutes')


/* DATABASE CONNECTION */

/* MIDDLEWARE */

// BodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))

// serve static files from the styles directory
app.use(express.static("./styles"));

// Use Router Middleware - 
app.use('/api/teams', teamRoutes)
app.use('/api/games', gameRoutes)
app.use('/api/conferences', confRoutes)

// specify the views directory
// register the template engine
app.set("views", "./views"); 
// app.set("view engine", "pug")
app.set("view engine", "ejs")


// Error handling
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

/* ROOT ROUTES - no router needed */
app.get('/', (req, res) => {
  res.send("Root GET Route works")
})

// Listen to the port
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
})
