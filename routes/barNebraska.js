const express = require('express')

const barNebraskaController = require('../controllers/barNebraska')

const router = express.Router()

<<<<<<< HEAD
router.get('/', barNebraskaController.getIndex)

=======
>>>>>>> f1a8d28c7c7882fe81737ed50607f37b222f0663
router.post('/savecontact', barNebraskaController.savecontact)

module.exports = router