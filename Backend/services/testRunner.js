const { exec } = require('child_process');

exports.runAllTests = () => {
  return new Promise((resolve) => {
    const timestamp = new Date();

    exec('npx jest tests/unit.test.js --json', (err1, stdout1) => {
      const unitJson = tryParseJSON(stdout1);

      exec('npx playwright test tests/e2e.test.js --reporter=json', (err2, stdout2) => {
        const e2eJson = tryParseJSON(stdout2);

        resolve({
          timestamp,
          unitSummary: parseUnit(unitJson),
          e2eSummary: parseE2E(e2eJson),
        });
      });
    });
  });
};

function tryParseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return { error: str };
  }
}

function parseUnit(data) {
  return {
    passed: data.numPassedTests,
    failed: data.numFailedTests,
    skipped: data.numPendingTests
  };
}

function parseE2E(data) {
  if (data.suites && data.suites[0]) {
    const summary = data.suites[0].specs.reduce((acc, spec) => {
      acc.total++;
      if (spec.ok) acc.passed++;
      else acc.failed++;
      return acc;
    }, { total: 0, passed: 0, failed: 0 });
    return summary;
  } else return { error: 'No data found' };
}