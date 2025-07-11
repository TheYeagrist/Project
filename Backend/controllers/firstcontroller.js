const { runAllTests } = require('../services/testRunner');
const Report = require('../models/Report');

exports.runTests = async (req, res) => {
  const reportData = await runAllTests();
  const savedReport = await Report.create(reportData);
  res.json(savedReport);
};

exports.getLatestReport = async (req, res) => {
  const latest = await Report.findOne().sort({ timestamp: -1 });
  res.json(latest || { message: "No reports found" });
};

exports.getAllReports = async (req, res) => {
  const allReports = await Report.find().sort({ timestamp: -1 });
  res.json(allReports);
};