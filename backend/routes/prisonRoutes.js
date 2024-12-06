const express = require('express');
const { addInmate, getInmates } = require('../controllers/prisonController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/inmate', authMiddleware(['prison']), addInmate);
router.get('/inmates', authMiddleware(['prison']), getInmates);

module.exports = router;