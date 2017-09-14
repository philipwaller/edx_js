var express = require('express');
var app = express();

var Animal = require('./Animal.js');
var Toy = require('./Toy.js');

app.use('/findtoy', (req, res) => {
        var query = {};
        if (req.query.id) {
            query.id = req.query.id;
            Toy.find( query, (err, toys) => {
                if (err) {
                    res.type('html').status(500).send('ERROR: '+err);
                } else if (!toys.length) {
                    res.json({});
                } else {
                    res.json(toys);
                }
            });
        } else {
            res.json({});
        }
    });

app.use('/findAnimals', (req, res) => {
        var query = {};
        if (req.query.species) query.species = req.query.species;
        if (req.query.trait) query.traits = req.query.trait;
        if (req.query.gender) query.gender = req.query.gender;

        if (! Object.keys(query).length) {
            res.json({});
        } else {
            Animal.find( query, (err, animals) => {
                    if (err) {
                        res.type('html').status(500).send('ERROR: ' + err);
                    } else if (! animals.length) {
                        res.json({});
                    } else {
                        res.json(animals);
                    }
                }).select({ name:1, species:1, breed:1, gender:1, age:1, _id:0 });
        }
    });

app.use('/animalsYoungerThan', (req,res) => {
        var query = {};
        if (!req.query.age) {
            res.json({});
        } else {
            query.age = {$lt: Number(req.query.age)};
            Animal.find( query, (err, animals) => {
                    if (err) {
                        res.type('html').status(500).send('ERROR: ' + err );
                    } else if (! animals.length) {
                        res.json({ count:animals.length });
                    } else {
                        var names = Object.values(animals).map( (animal) => {
                                return animal.name;
                            });
                        res.json({ count:animals.length, names:names })
                    }
                }).select({ name:1, _id:0 })
        }
    });

app.use('/calculatePrice', (req, res) => {
        var query = {};
    });

app.use('/', (req, res) => {
        res.json({ msg : 'It works!' });
    });

app.listen(3000, () => {
        console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;
