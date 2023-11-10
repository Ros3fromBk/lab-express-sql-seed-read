const express = require('express');
const app = express();

const songController = require("./controllers/songController");
// console.log();

//Import cors
const cors = require('cors')


// Middleware
app.use(cors());
app.use(express.json());
// When the URL starts w /songs, use the songController to route us appropriately
app.use("/songs", songController);


app.get('/', (req, res) => {
    res.send("WELCOMEEE");
});



 module.exports = app;