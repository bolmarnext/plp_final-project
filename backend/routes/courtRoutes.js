const express = require('express');
const { assignCaseToJudge } = require('../controllers/courtController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/assign-case', authMiddleware(['court']), assignCaseToJudge);

module.exports = router;