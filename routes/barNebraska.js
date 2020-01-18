const express = require('express')

const barNebraskaController = require('../controllers/barNebraska')

const router = express.Router()

router.get('/', barNebraskaController.getIndex)

router.post('/savecontact', barNebraskaController.savecontact)

module.exports = router