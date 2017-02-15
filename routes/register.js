var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Express' });
});

router.post('/',function (req,res,next) {

    var databaseUrl = 'HealthResourceDB';
    var collections = ['Resources'];
//Hospital Name, Hospital Category, Address, Pincode, Phone Number,
//Emergency Number, Ambulance Phone Number, Toll Free Number
//Helpline, Email, Website, SPECIALITIES, FACILITIES, AVAILABLE BEDS.
    var db = mongojs(databaseUrl,collections);
    body_name = req.body.name;
    body_location = req.body.location;
    record = {name: body_name, location: body_location}
    // db.Resources.save(record, function (err, records) {
    //     console.log("something jiggles");
    // })
})

module.exports = router;
