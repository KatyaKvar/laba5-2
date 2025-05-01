const express = require('express');
const router = express.Router();
const flashController = require('c:/Users/Lenovo/Desktop/Stud/ВТИП 2 сем/5 лаба/controllers/flashController');

router.post('/add', flashController.addFlash);
router.get('/manufacturers', flashController.getManufacturersWithLowWarranty);
router.delete('/delete', flashController.deleteFlashesWithLowWarranty);

module.exports = router;