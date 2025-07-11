import React, { useState, useEffect } from 'react';
import { fetchReport, fetchAllReports, triggerTests } from '../services/api';
import '../styles/styles.css';

function Dashboard() {
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState([]);

  const loadReports = async () => {
    const latest = await fetchReport();
    const all = await fetchAllReports();
    setReport(latest);
    setHistory(all);
  };

  useEffect(() => {
    loadReports();
  }, []);

  const runTests = async () => {
    await triggerTests();
    loadReports(); // refresh data
  };

  return (
    <div className="dashboard-box">
      <h1>Automation Test Dashboard</h1>
      <button onClick={runTests}>Run Tests</button>

      {report && (
        <>
          <p><strong>Last Run:</strong> {new Date(report.timestamp).toLocaleString()}</p>

          <h3>Unit Tests Summary:</h3>
          <ul>
            <li>✅ Passed: {report.unitSummary?.passed}</li>
            <li>❌ Failed: {report.unitSummary?.failed}</li>
            <li>⏭️ Skipped: {report.unitSummary?.skipped}</li>
          </ul>

          <h3>Playwright E2E Summary:</h3>
          <ul>
           <li>✅ Passed: {report.e2eSummary?.passed}</li>
            <li>❌ Failed: {report.e2eSummary?.failed}</li>
          </ul>
        </>
      )}

      <hr />
      <h2>Previous Runs</h2>
      <ul>
        {history.map((r, i) => (
          <li key={i}>
            {new Date(r.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;