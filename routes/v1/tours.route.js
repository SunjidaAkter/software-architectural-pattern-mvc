const express = require("express");
const router = express.Router();
const toursController = require("../../controllers/tours.controller");


router.route("/")
    .get(toursController.getAllTours)
    .post(toursController.createTour);


// router.route("/trending")
//     .get(toursController.getTrending);


// router.route("/cheapest")
//     .get(toursController.getCheapest);


router.route("/:id")
    //     .get(toursController.getOneTourById)
    .patch(toursController.updateOneTourById);


module.exports = router;