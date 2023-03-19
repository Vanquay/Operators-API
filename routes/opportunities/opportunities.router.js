const express = require('express');
const { body, validationResult  } = require('express-validator');
const { createOpportunity } = require('./opportunitites.service');


const opportunitiesRouter = express.Router();

opportunitiesRouter.post(
    '/',
    body('operatorId').notEmpty(),
    body('businessId').notEmpty(),
    body('businessName').notEmpty(),
    body('opTitle').notEmpty(),
    body('pay').isDecimal(),
    body('startTime').notEmpty(),
    body('endTime').notEmpty(),
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        await createOpportunity(req.body);
        return res.status(201).json(req.body);

    });

module.exports = {
    opportunitiesRouter
}