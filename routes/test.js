/**
 * Created by ITRA on 09-02-2017.
 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json([
        {
            "_id":"58a574af62de841ec0cc6c59",
            "name":"Name One",
            "location":"20.346987, 85.816559",
            "specialization":"Cardiology",
            "email":"123@hospital.com",
            "phoneNumber":"12345678",
            "beds":"Yes"
        },
        {
            "_id":"58a574afda2de841ec0cc6c59",
            "name":"Name two",
            "location":"20.342420, 85.823483",
            "specialization":"Paediatrics",
            "email":"321@hospital.com",
            "phoneNumber":"12345678",
            "beds":"Yes"
        }
        ]
    );
});

module.exports = router;
