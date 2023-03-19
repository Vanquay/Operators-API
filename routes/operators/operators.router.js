const express = require('express');
const { getLastInsertId } = require('../../db');
const { getOperator, createOperator, getSchedules } = require('./operators.service');

const operatorsRouter = express.Router();

operatorsRouter
    .get( 
        '/:operatorId'
        , async ( req, res ) => {
            const operatorId = req.params.operatorId;
            const operator = await getOperator( operatorId );

            return res
                .status( 200 )
                .json( operator )
        }
    )
    .post( 
        '/'
        , async ( req, res ) => {
            await createOperator( {
                firstName: req.body.firstName
                , lastName: req.body.lastName
            } );

            const operatorId = await getLastInsertId();
            const createdOperator = await getOperator( operatorId );

            return res
                .status( 201 )
                .json( createdOperator )
        }
    );

operatorsRouter.get('/:operatorId/schedules', async(req, res) => {
    const operatorId = req.params.operatorId;
    const schedule = await getSchedules( operatorId );

    return res.status(200).json(schedule);
})

module.exports = {
    operatorsRouter
}