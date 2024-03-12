/* SETUP */
const express = require('express')
const app = express();
const port = 3000;

// Require routes from routes folder
const teamRoutes = require('./routes/teamRoutes')


/* DATABASE CONNECTION */

/* MIDDLEWARE */

// serve static files from the styles directory
app.use(express.static("./styles"));

// Use Router Middleware - 
app.use('/api/teams', teamRoutes)

// specify the views directory
// register the template engine
app.set("views", "./views"); 
// server.set("view engine", "pug")
// server.set("view engine", "ejs")


// Error handling
app.use((err, req, res, next) => {
  res.status(400).send(err.message)
})

/* ROOT ROUTES - no router needed */
app.get('/', (req, res) => {
  // response.render("index", {
  //   cheese: "munster",
  //   bread: "wheat"
  // })
  res.send("Root GET Route works")
})

// Listen to the port
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
})
