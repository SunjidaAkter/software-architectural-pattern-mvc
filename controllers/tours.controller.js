const toursService = require("../services/tours.service");
const { isValidObjectId } = require("mongoose");


//get all tours
exports.getAllTours = async (req, res, next) => {
    try {
        const result = await toursService.getAllToursService();
        if (!result) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't get the data",
            error: error.message
        })
    }
}


//create a new tour
exports.createTour = async (req, res, next) => {
    try {
        const result = await toursService.createTourService(req.body);
        if (!result) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't post the data",
            error: error.message
        });
    }
}


//update one tour by id
exports.updateOneTourById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await toursService.updateOneTourByIdService(id, req.body);
        if (!result || !isValidObjectId(id)) {
            return res.status(400).json({
                success: false,
                message: "something is wrong"
            });
        }
        res.status(200).json({
            success: true,
            message: "successfull",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "can't updatet the data",
            error: error.message
        });
    }
}


//get a tour by id
// exports.getOneTourById = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await toursService.getOneTourByIdService(id, req.body);
//         if (!result || !isValidObjectId(id)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "something is wrong"
//             });
//         }
//         res.status(200).json({
//             success: true,
//             message: "successfull",
//             data: result
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: 'fail',
//             message: "can't updatet the data",
//             error: error.message
//         });
//     }
// }