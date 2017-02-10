/**
 * Created by ITRA on 09-02-2017.
 */
var express = require('express');
var router = express.Router();

router.get('/getAllResources', function(req, res, next) {
    res.json(
        {"Name":["Name One","Name Two","Name Three"],
        "Location":["20.347013, 85.816491","20.351916, 85.813351","20.342289, 85.823457"]}
        );
});

module.exports = router;
