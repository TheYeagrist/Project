const { runAllTests } = require('../services/testRunner');
const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, '..', 'report.json');

exports.runTests = async (req, res) => {
  const report = await runAllTests();
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  res.json(report);
};

exports.getLatestReport = (req, res) => {
  if (fs.existsSync(reportPath)) {
    res.json(JSON.parse(fs.readFileSync(reportPath)));
  } else {
    res.json({ message: 'No report available yet.' });
  }
};