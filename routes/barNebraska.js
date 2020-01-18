const express = require('express');

const barNebraskaController = require('../controllers/barNebraska');

const router = express.Router();

<<<<<<< HEAD
router.post('/savecontact', barNebraskaController.savecontact);
router.get('/', barNebraskaController.getIndex);
=======
<<<<<<< HEAD
router.get('/', barNebraskaController.getIndex)

=======
>>>>>>> f1a8d28c7c7882fe81737ed50607f37b222f0663
router.post('/savecontact', barNebraskaController.savecontact)
>>>>>>> 9b8661faf697d694c78f5819e12368fb01a1e7e6

module.exports = router;