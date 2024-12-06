const express = require('express');
const { createCaseFile, getCaseFiles } = require('../controllers/policeController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/case', authMiddleware(['police']), createCaseFile);
router.get('/cases', authMiddleware(['police']), getCaseFiles);

module.exports = router;