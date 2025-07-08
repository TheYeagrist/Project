import React, { useState, useEffect } from 'react';
import { fetchReport, triggerTests } from '../services/api';
import '../styles/styles.css';

function Dashboard() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetchReport().then(setReport);
  }, []);

  const runTests = async () => {
    const res = await triggerTests();
    setReport(res);
  };

  return (
    <div className="dashboard-box">
      <h1>Automation Test Dashboard</h1>
      <button onClick={runTests}>Run Tests</button>
      {report && (
        <>
          <p><strong>Last Run:</strong> {new Date(report.timestamp).toLocaleString()}</p>
          <h3>Unit Tests:</h3>
          <pre>{report.unitResult}</pre>
          <h3>Playwright Tests:</h3>
          <pre>{report.e2eResult}</pre>
        </>
      )}
    </div>
  );
}

export default Dashboard;