const { exec } = require('child_process');

exports.runAllTests = () => {
  return new Promise((resolve) => {
    const timestamp = new Date();
    exec('echo Running Unit Tests', (err1, stdout1) => {
      exec('echo Running Playwright Tests', (err2, stdout2) => {
        resolve({
          timestamp,
          unitResult: stdout1,
          e2eResult: stdout2
        });
      });
    });
  });
};