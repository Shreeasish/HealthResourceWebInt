/**
 * Created by ITRA on 09-02-2017.
 */
var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();
var databaseUrl = 'HealthResourceDB';
var collections = ['Resources'];
//Hospital Name, Hospital Category, Address, Pincode, Phone Number,
//Emergency Number, Ambulance Phone Number, Toll Free Number
//Helpline, Email, Website, SPECIALITIES, FACILITIES, AVAILABLE BEDS.
var db = mongojs(databaseUrl,collections);


router.get('/getAllResources', function(req, res, next) {

    db.Resources.find(function (err,docs) {
      console.log(docs);
      res.json(docs);
    });

});

module.exports = router;
