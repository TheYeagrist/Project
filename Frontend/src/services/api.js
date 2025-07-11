const BASE = 'http://localhost:5000/api';

export const fetchReport = async () => {
  const res = await fetch(`${BASE}/latest-report`);
  return res.json();
};

export const fetchAllReports = async () => {
  const res = await fetch(`${BASE}/all-reports`);
  return res.json();
};

export const triggerTests = async () => {
  const res = await fetch(`${BASE}/run-tests`, { method: 'POST' });
  return res.json();
};