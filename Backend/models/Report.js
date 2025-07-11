const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  timestamp: Date,
  unitSummary: {
    passed: Number,
    failed: Number,
    skipped: Number
  },
  e2eSummary: {
    passed: Number,
    failed: Number
  }
});

module.exports = mongoose.model('Report', reportSchema);