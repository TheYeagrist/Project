const express = require('express');
const router = express.Router();
const{runTests, getLatestReport, getAllReports} = require('../controllers/firstcontroller')

/**
 * @swagger
 * /api/run-tests:
 *   post:
 *     summary: Run all tests
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               exampleField:
 *                 type: string
 *                 description: Example input (not used in dummy logic)
 *     responses:
 *       200:
 *         description: Test results
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: string
 *                 unitResult:
 *                   type: string
 *                 e2eResult:
 *                   type: string
 */
router.post('/run-tests', runTests);

/**
 * @swagger
 * /api/latest-report:
 *   get:
 *     summary: Get the latest test report
 *     responses:
 *       200:
 *         description: Latest report
 */
router.get('/latest-report', getLatestReport);

router.get('/all-reports', getAllReports);

module.exports = router;  