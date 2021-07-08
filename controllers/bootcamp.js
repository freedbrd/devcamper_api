const Bootcamp = require('../models/Bootcamps');

/**
 * @description Get all bootcamps
 * @route       GET /api/v1/bootcamps
 * @access      Public
 */
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    })
}

/**
 * @description Get sigle bootcamp
 * @route       GET /api/v1/bootcamps/:id
 * @access      Public
 */
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Get bootcamp ${req.params.id}`
    })
}

/**
 * @description Create new bootcamp
 * @route       POST /api/v1/bootcamps
 * @access      Private
 */
exports.createBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201)
            .json({
                success: true,
                data: bootcamp
            });
    } catch (err) {

        console.log(err);

        res.status(400)
            .json({
                success: false
            })
    }



}

/**
 * @description Update bootcamp
 * @route       PUT /api/v1/bootcamps/:id
 * @access      Private
 */
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Update bootcamp ${req.params.id}`
    })
}

/**
 * @description Delete bootcamp
 * @route       DELETE /api/v1/bootcamps/:id
 * @access      Private
 */
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: `Delete bootcamp ${req.params.id}`
    })
}
