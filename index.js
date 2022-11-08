//create express server
const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

//Initialise express  
const app = express();

//Initialise Express middleware
app.use(json());

//create a basic express route
app.get('/', (req, res) => {res.send('Hello');
}); 
app.use("/flightRoute", routes);

//port
const port = process.env.PORT || 3000;

//Listen to connection
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
