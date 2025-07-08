import axios from 'axios';

const BASE = 'http://localhost:5000/api';

export const triggerTests = () => axios.post(`${BASE}/run-tests`).then(res => res.data);
export const fetchReport = () => axios.get(`${BASE}/latest-report`).then(res => res.data);