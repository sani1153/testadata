const data = require('../controllers/data-controllers');
const express = require('express');
const router = express.Router();

router.get('/data', data.getData);
router.post('/data', data.createData);
router.put('/data/:id', data.updateData);
router.delete('/data/:id', data.deleteData);

module.exports = router;