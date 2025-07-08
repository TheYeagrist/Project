const express = require('express');
const router = express.Router();
const { runTests, getLatestReport } = require('.../controllers/testController');

router.post('/run-tests', runTests);
router.get('/latest-report', getLatestReport);

module.exports = router;  