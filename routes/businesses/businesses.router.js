const express = require('express');
const { body, validationResult  } = require('express-validator');
const { createBusiness } = require('./businesses.service');

const businessesRouter = express.Router();

businessesRouter.post(
    '/',
    body('state').isLength({max:2}),
    body('zipcode').isLength({max:5}),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        await createBusiness(req.body);
        res.status(201).json(req.body);
});

module.exports = {
    businessesRouter
}

