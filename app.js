//created a new collection called "saws" in our db and a database called chainsaws

//was getting a deprication error, had to use mongo version 4.10.xx, seems to work for now



//dependencies
const express = require('express');
const app = express();
const router = require('router');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const chainsaw = require('./models/chainsaw');

/******** database **************/
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/saws');
//or mongoose.connect('mongodb://localhost:27017/saws');

/******** middleware ************/
//set up router
app.use('/api', router);

//set up body parser to send back in json format
app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log('we use the router and next moves us to the next requests');
    next();
})

/******** routes ****************/
//first GET
app.get('/', function(req, res){
    res.json({ message: 'You did it!' });
});

//GET sawData
    //everything worked until this point here
app.get('/api/sawData', function(){
    console.log('get saw data');
    sawData.find({}).then(function(eachOne){
        res.json(eachOne);
    });
})

//POST sawData

app.listen(3000);
console.log('started application, Great job');