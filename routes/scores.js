require('dotenv').config();

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Score = require('../model/score');

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

const connectDB = () => {
    return mongoose.connect(mongoURI, { useNewUrlParser : true, useUnifiedTopology : true });
}

const handleError = (error) => {

}

db.on('error', (err) => { console.log(err.message) });
db.on('open', () => { console.log('Connected to MongoDB @:' + mongoURI)});
db.on('close', () => { console.log('Disconnected from MongoDB')} );

// ROUTES

// CREATE

router.post('/', (req, res) => {
    const newScore = {
        initials : req.body.initials,
        score : parseInt(req.body.score)
    }
    connectDB().then( () => {
        Score.create(newScore).then( score => {
            res.json(score);
        }).catch( err => {
            console.log( err.message );
            res.send(err.message);
        }).finally( () => {
            db.close();
        })
    }).catch( (err) => {
        res.send("Couldn't connect to database.  Error: " + err.message);
    });
})

// READ

//  Retrieves all Score documents from the Database and sends JSON data as a response.

router.get('/', (req, res) => {
    connectDB().then( () => {
        Score.find({}).then( data => {
            res.json(data);
        }).catch( err => {
            console.log(err.message);
            res.send(err.message);
        }).finally( () => {
            db.close();
        })
    }).catch( (err) => {
        res.send("Couldn't connect to database.  Error: " + err.message);
    })
})

//  Retrieves all Score documents with the given initials and sends JSON data as a response.

router.get('/user/:initials', (req, res) => {
    connectDB().then( ()=> {
        Score.find({ initials : req.params.initials.toUpperCase() }).then( data => {
            res.json(data);
        }).catch( err => {
            console.log(err.message);
            res.send(err.message);
        }).finally( () => {
            db.close();
        })
    }).catch( (err) => {
        res.send("Couldn't connect to database.  Error: " + err.message);
    })
})

router.get('/id/:id', (req, res) => {
    connectDB().then( () => {
        Score.findById(req.params.id).then( data => {
            res.json(data);
        }).catch( err => {
            console.log(err.message);
            res.send(err.message);
        }).finally( () => {
            db.close();
        })
    })
})

module.exports = router;