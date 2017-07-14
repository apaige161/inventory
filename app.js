/* Instructions to Start */
    //npm install
    //run mongo
    //run nodemon

/* General notes */
//created a new collection called "saws" in our db and a database called chainsaws

//was getting a deprication error, had to use mongo version 4.10.xx, seems to work for now



//dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const chainsaw = require('./models/chainsaw');

/******** database **************/
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:/saws');

/******** middleware ************/

//set up body parser to send back in json format
app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log('we use the router and next moves us to the next requests');
    next();
})

/******** routes ****************/

/** GET requests ***/
//GET root
app.get('/', function(req, res){
    res.json({ message: 'You did it!' });
});

//GET saw data
app.get('/chainsaw', function(req, res){
    console.log('GET saw data');
    chainsaw.find({}).exec().then(function(eachOne){
        res.json(eachOne);
    });
})

//GET saw data by ID
    //not exactly working right... last on my priorties
app.get('/chainsaw/:chainsaw_id', function(req, res){
    chainsaw.findById(req.params.chainsaw_id).exec().then(function(chainsaw){
        res.json(chainsaw);
        console.log('chainsaw found!');
    });
});

//GET saw data by date
    //Cast to ObjectId failed for value "date" at path "_id"
app.get('/chainsaw/date/:date', function(req, res){
    chainsaw.find(req.params.date).exec().then(function(chainsaw){
        res.json(chainsaw);
        console.log('date introduced!');
    });
});

/** POST requests ***/
//POST saw data
    //POST route is working but nothing is being posted
app.post('/chainsaw', function(req, res){
    console.log('posted saw data!');
    chainsaw.create({
        saw_model: req.body.saw_model,
        saw_serial: req.body.saw_serial
    }).exec().then(function(chainsaw){
        res.json(chainsaw)
    });
});

/** PUT requests ***/
//PUT (update) by ID
    //err-- Cast to number failed for value "undefined" at path "saw_serial"
    //issues with the by ID code
app.put('/chainsaw/:chainsaw_id', function(req, res){
    console.log('edited saw data!');
    chainsaw.findOneAndUpdate({
        saw_model: req.body.saw_model,
        saw_serial: req.body.saw_serial
    }).exec().then(function(chainsaw){
        res.json(chainsaw)
    });
});

/** DELETE requests ***/
//DELETE by ID
    //err-- Cannot DELETE /chainsaw/5968fe4126d9ed2bd7aacc7e
    //issues with the by ID code
app.put('/chainsaw/:chainsaw_id', function(req, res){
    console.log('saw deleted!');
    chainsaw.findOneAndRemove({
        saw_model: req.body.saw_model,
        saw_serial: req.body.saw_serial
    }).exec().then(function(chainsaw){
        res.json(chainsaw)
    });
});





app.listen(3000);
console.log('started application, Great job');