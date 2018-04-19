/* set up express and the express router */
var express = require("express")
var router = express.Router();
var hotelController = require('../controllers/hotels.controllers')

router
    .route("/hotels")
    .get(hotelController.getAllHotels);


module.exports = router;
