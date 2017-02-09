/**
 * Created by ITRA on 09-02-2017.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.json({"Name":"Name One","Location":"20.347013, 85.816491"});
});

module.exports = router;
