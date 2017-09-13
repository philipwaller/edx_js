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
                    res
                        .type('html').status(500)
                        .send('ERROR: '+err);
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
        if (req.query.trait) query.trait = req.query.trait;
        if (req.query.gender) query.gender = req.query.gender;

        if (! Object.keys(query).length) {
            res.json({});
        } else {
            Animal.find( query, (err, animals) => {
                    if (err) {
                        res
                            .type('html').status(500)
                            .send('ERROR: ' + err);
                    } else {
                        res.json(animals);
                    }
                });
    });

app.use('/', (req, res) => {
        res.json({ msg : 'It works!' });
    });

app.listen(3000, () => {
        console.log('Listening on port 3000');
    });



// Please do not delete the following line; we need it for testing!
module.exports = app;
