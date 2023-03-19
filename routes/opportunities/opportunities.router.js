const express = require('express');
const { body, validationResult  } = require('express-validator');
const { createOpportunity } = require('./opportunitites.service');


const opportunitiesRouter = express.Router();

module.exports = {
    opportunitiesRouter
}