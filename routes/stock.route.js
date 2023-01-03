const mongoose = require('mongoose');
const express = require('express');
const stockController = require('../controllers/stock.controller');
const router = express.Router();

router.route('/').get(stockController.getStock);