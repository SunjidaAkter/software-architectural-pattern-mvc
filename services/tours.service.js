const Tours = require("../models/Tours");

exports.getAllToursService = async () => {
    const tours = await Tours.find({})
    return tours;
}
exports.createTourService = async (data) => {
    const tours = await Tours.create(data)
    return tours;
}
exports.updateOneTourByIdService = async (id, data) => {
    const tours = await Tours.updateOne(
        { _id: id },
        { $set: data },
        {
            runValidators: true,
        }
    );
    return tours;
}
// exports.getOneTourByIdService = async (id, data) => {
//     const tours = await Tours.updateOne(
//         { _id: id },
//         { $set: data },
//         {
//             runValidators: true,
//         }
//     );
//     return tours;
// }